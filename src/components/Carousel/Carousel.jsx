import React, {useEffect, useState} from "react";
import './Carousel.css';
import Filter from "../Filter/Filter.jsx";
import Searchbar from "../Searchbar/Searchbar.jsx";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard.jsx";
import fetchAdventures from "../../util/fetchers.jsx";

function Carousel() {

    const [adventureData, setAdventureData] = useState([]);
    const [selectedSeizoen, setSelectedSeizoen] = useState("");
    const [selectedOmgeving, setSelectedOmgeving] = useState("");
    const [searchWord, setSearchWord] = useState("");
    const [omgevingen, setOmgevingen] = useState([]);

    const uniqueOmgevingen = [...new Set(omgevingen)];

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const data = await fetchAdventures();
                if(!cancelled) setAdventureData(data);
            } catch (err) {
                console.error(err)
            }
        }
        load();
        return () => {
            cancelled = true;
        }
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