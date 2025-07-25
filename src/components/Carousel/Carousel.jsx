import React, {useEffect, useState} from "react";
import axios from "axios";
import './Carousel.css';

function Carousel() {
    //hardcoded thumbnails for now-> will be changed later
    const adventuresThumbnails = [
        "/assets/thumbnails/01-Lea-ontdekt-een-hoopje-zand.png",
        "/assets/thumbnails/02-Swijnstein-ontmoet-wormpje.png",
        "/assets/thumbnails/03-Fladder-en-de-bezige-mier.png",
        "/assets/thumbnails/04-Doris-en-de-schatkist-Deel-1.png",
        "/assets/thumbnails/05-Doris-en-de-schatkist-Deel-2.png"
    ];
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const visibleThumbnails = adventuresThumbnails.slice(currentStartIndex, currentStartIndex + 3);
    const [adventureData, setAdventureData] = useState([]);


    //fetching Adventures from Cloud Firestore
    useEffect(() => {
        axios
            .get("https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures?key=AIzaSyC1amjd3zL34JGkHpdeGnEQKqmGC5SACKU")
            .then(response => {
                const adventures = response.data.documents?.map(doc => ({
                    id: doc.name.split("/").pop(),
                    title: doc.fields?.title?.stringValue || "",
                    videoUrl: doc.fields?.videoUrl?.stringValue || null,
                    audioUrl: doc.fields?.audioUrl?.stringValue || null,
                    omgeving: doc.fields?.audioUrl?.stringValue || null,
                    seizoen: doc.fields?.audioUrl?.stringValue || null,
                })) || [];

                setAdventureData(adventures);
                console.log("Fetch adventures data:", adventures);
            })
            .catch(err => {
                console.log("error fetching adventures:", err);
            });
    }, []);


    function returnBack() {
        if (currentStartIndex > 0) {
            setCurrentStartIndex(currentStartIndex - 1);
        }
    }

    function goForward() {
        if (currentStartIndex < adventuresThumbnails.length - 1) {
            setCurrentStartIndex(currentStartIndex + 1);
        }
    }

    //rendering cards with my hardcoded thumbnail pictures
    const renderedThumbnails = visibleThumbnails
        .map((thumbnail, index) => {
            const adventureIndex = currentStartIndex + index;
            const adventure = adventureData[adventureIndex];

            return (
                <div className="thumbnail-card" key={index}>
                    <div className="thumbnail-wrapper">
                        <img
                            src={thumbnail}
                            alt="Scribbels Episode Cover"
                            className="thumbnail-image"
                        />
                    </div>
                </div>
            );

            // <div className="thumbnail-buttons">
            //     <button
            //         onClick={() => {
            //             if (adventure && adventure.videoUrl) {
            //             window.open(adventure.videoUrl, "_blank");
            //     }
            //     }}
            //     disabled={!adventure || !adventure.videoUrl}
            //     >
            //         📺
            //     </button>
            // </div>


            const renderedThumbnails = visibleThumbnails
                .map((thumbnail, index) => (
                    <div className="thumbnail-card" key={index}>
                        <div className="thumbnail-wrapper">
                            <img
                                src={thumbnail}
                                alt={`Scribbels Episode Cover`}
                                className="thumbnail-image"
                            />
                        </div>
                        <div className="thumbnail-buttons">
                            <button>📺</button>
                            <button>🎧</button>
                            <button>📖</button>
                        </div>
                    </div>
                ))
            ;


            return (
                <div className="container">
                    <div className="carousel-wrapper">
                        <button className="carousel-nav-btn"
                                onClick={returnBack}
                                disabled={currentStartIndex === 0}>
                            ⇦
                        </button>

                        <div className="carousel-thumbnails">
                            {renderedThumbnails}
                        </div>

                        <button className="carousel-nav-btn"
                                onClick={goForward}
                                disabled={currentStartIndex === adventuresThumbnails.length - 1}>
                            ⇨
                        </button>
                    </div>
                </div>
            )
        })
}

export default Carousel;