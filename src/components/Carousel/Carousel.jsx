import React, {useEffect, useState} from "react";
import axios from "axios";
import './Carousel.css';
import Filter from "../Filter/Filter.jsx";

function Carousel() {

    const [adventureData, setAdventureData] = useState([]);

    const omgevingen = adventureData
        .map(({omgeving}) => omgeving.split(","));

    const seizoenen = adventureData
        .map(({seizoen}) => seizoen.split(","));

    //fetching Adventures from Cloud Firestore
    useEffect(() => {
        axios
            .get("https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures")
            .then(response => {
                console.log(response.data);
//technische beslissing: use stringValue.split instead of arrayValue in order to retrieve contents of
// arrays easier do to stringValue key-value pairs object
                const adventures = response.data.documents?.map(doc => ({
                    id: doc.name.split("/").pop(),
                    title: doc.fields?.title?.stringValue || "",
                    videoUrl: doc.fields?.youtube_url?.stringValue || null,
                    audioUrl: doc.fields?.spotify_url?.stringValue || null,
                    thumbnailUrl: doc.fields?.thumbnail_url?.stringValue || null,
                    omgeving: doc.fields?.omgeving?.arrayValue || null,
                    seizoen: doc.fields?.seizoen?.arrayValue || null,
                    soort: doc.fields?.soort?.stringValue.split(",") || null,
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

    // //rendering cards with my hardcoded thumbnail pictures
    // const renderedThumbnails = visibleThumbnails
    //     .map((thumbnail, index) => {
    //             const adventureIndex = currentStartIndex + index;
    //             const adventure = adventureData[adventureIndex];
    //
    //             return (
    //                 <div className="thumbnail-card" key={index}>
    //                     <div className="thumbnail-wrapper">
    //                         <img
    //                             src={thumbnail}
    //                             alt="Scribbels Episode Cover"
    //                             className="thumbnail-image"
    //                         />
    //                     </div>
    //                 </div>
    //             )
    //         }
    //     )


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


    function handleButtonClick() {

    }

    const renderedThumbnails = adventureData
        .map(({thumbnailUrl, audioUrl, videoUrl, title, index}) => (
            <div className="thumbnail-card" key={index}>
                <div className="thumbnail-wrapper">
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        className="thumbnail-image"
                    />
                </div>
                <div className="thumbnail-buttons">
                    <a target="_blank" rel="noopener noreferrer" href={videoUrl}>
                        <button>📺</button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={audioUrl}>
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
            <Filter omgevingen={omgevingen} />
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
        </>
    )
}

export default Carousel;