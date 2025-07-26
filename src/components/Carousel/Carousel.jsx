import React, {useEffect, useState} from "react";
import axios from "axios";
import './Carousel.css';
import Filter from "../Filter/Filter.jsx";

function Carousel() {

    const [adventureData, setAdventureData] = useState([]);
    const [selectedSeizoen, setSelectedSeizoen] = useState("");
    const [selectedOmgeving, setSelectedOmgeving] = useState("");
    const [searchWord, setSearchWord] = useState("");

    const omgevingen = adventureData
        .flatMap(({omgeving}) =>
            omgeving?.flatMap(item => item.split(",").map(str => str.trim())) || []
        );

    const uniqueOmgevingen = [...new Set(omgevingen)];

    const seizoenen = adventureData
        .map(({seizoen}) => seizoen.flat(","));

    useEffect(() => {
        axios
            .get("https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures")
            .then(response => {
                console.log(response.data);
                const adventures = response.data.documents?.map(doc => ({
                    id: doc.name.split("/").pop(),
                    title: doc.fields?.title?.stringValue || "",
                    videoUrl: doc.fields?.youtube_url?.stringValue || null,
                    audioUrl: doc.fields?.spotify_url?.stringValue || null,
                    thumbnailUrl: doc.fields?.thumbnail_url?.stringValue || null,
                    omgeving: doc.fields?.omgeving?.arrayValue?.values?.map(v => v.stringValue) || [],
                    seizoen: doc.fields?.seizoen?.arrayValue?.values?.map(v => v.stringValue) || [],
                })) || [];

                setAdventureData(adventures);
                console.log("Fetch adventures data:", adventures);
            })
            .catch(err => {
                console.log("error fetching adventures:", err);
            });
    }, []);

    const filteredAdventures = adventureData.filter(adventure => {
        const validSeizoen = selectedSeizoen === "" || adventure.seizoen.includes(selectedSeizoen);
        const validOmgeving = selectedOmgeving === "" || adventure.omgeving.includes(selectedOmgeving);
        const validSearch = searchWord === "" || adventure.title.toLowerCase().includes(searchWord.toLowerCase());

        return validOmgeving && validSeizoen && validSearch;
    })

    const renderedThumbnails = filteredAdventures
        .map((adventure, index) => (
            <div className="thumbnail-card" key={adventure.id || index}>
                <div className="thumbnail-wrapper">
                    <img
                        src={adventure.thumbnailUrl}
                        alt={adventure.title}
                        className="thumbnail-image"
                    />
                </div>
                <div className="thumbnail-buttons">
                    <a target="_blank" rel="noopener noreferrer" href={adventure.videoUrl}>
                        <button>📺</button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={adventure.audioUrl}>
                        <button>🎧</button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        <button>📖</button>
                    </a>
                </div>
            </div>
        ))
    ;

    return (
        <>
            <Filter
                omgevingen={uniqueOmgevingen}
                selectedSeizoen={selectedSeizoen}
                selectedOmgeving={selectedOmgeving}
                onSeizoenChange={setSelectedSeizoen}
                onOmgevingChange={setSelectedOmgeving}
            />
            <div className="container">
                <div className="carousel-wrapper">
                    <div className="carousel-thumbnails">
                        {renderedThumbnails}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel;