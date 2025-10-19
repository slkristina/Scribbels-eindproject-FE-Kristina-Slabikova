import React, {useEffect, useState} from "react";
import axios from "axios";
import './Carousel.css';
import Filter from "../Filter/Filter.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard.jsx";

function Carousel() {

    const [adventureData, setAdventureData] = useState([]);
    const [selectedSeizoen, setSelectedSeizoen] = useState("");
    const [selectedOmgeving, setSelectedOmgeving] = useState("");
    const [searchWord, setSearchWord] = useState("");
    const [omgevingen, setOmgevingen] = useState([]);

    const uniqueOmgevingen = [...new Set(omgevingen)];

    async function fetchAdventures() {
        try {
            const response = await axios.get(
                "https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures"
            );

            const adventures = response.data.documents?.map(doc => ({
                id: doc.name.split("/").pop(),
                title: doc.fields?.title?.stringValue || "",
                youtubeUrl: doc.fields?.youtube_url?.stringValue || null,
                spotifyUrl: doc.fields?.spotify_url?.stringValue || null,
                thumbnailUrl: doc.fields?.thumbnail_url?.stringValue || null,
                omgeving: doc.fields?.omgeving?.arrayValue?.values?.map(v => v.stringValue) || [],
                seizoen: doc.fields?.seizoen?.arrayValue?.values?.map(v => v.stringValue) || [],
            })) || [];

            const omgevingen = adventureData
                .flatMap(({omgeving}) =>
                    omgeving?.flatMap(item => item.split(",").map(str => str.trim())) || []
                );

            setOmgevingen(omgevingen);
            setAdventureData(adventures);
        } catch (err) {
            console.error("Error fetching adventures:", err.message);
        }
    }


    useEffect(() => {
     fetchAdventures();
    }, []);

    const filteredAdventures = adventureData.filter(adventure => {
        const validSeizoen = selectedSeizoen === "" || adventure.seizoen.includes(selectedSeizoen);
        const validOmgeving = selectedOmgeving === "" || adventure.omgeving.includes(selectedOmgeving);
        const validSearch = searchWord === "" || adventure.title.toLowerCase().includes(searchWord.toLowerCase());

        return validOmgeving && validSeizoen && validSearch;
    })

    return (
        <>
            <Filter
                omgevingen={uniqueOmgevingen}
                selectedSeizoen={selectedSeizoen}
                selectedOmgeving={selectedOmgeving}
                onSeizoenChange={setSelectedSeizoen}
                onOmgevingChange={setSelectedOmgeving}
            />
            <Searchbar
                onSearchChange={setSearchWord}
                searchWord={searchWord}
            />
            <section className="container">
                <div className="carousel-wrapper">
                    <ul className="carousel-thumbnails">
                        {filteredAdventures
                            .map((adventure, index) => {

                                return <ThumbnailCard key={adventure.id} {...adventure} index={index}/>

                            })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Carousel;