import React, {useState} from "react";
import './Carousel.css';


function Carousel() {
    const adventuresThumbnails = [
        "/assets/thumbnails/01-Lea-ontdekt-een-hoopje-zand.png",
        "/assets/thumbnails/02-Swijnstein-ontmoet-wormpje.png",
        "/assets/thumbnails/03-Fladder-en-de-bezige-mier.png",
        "/assets/thumbnails/04-Doris-en-de-schatkist-Deel-1.png",
        "/assets/thumbnails/05-Doris-en-de-schatkist-Deel-2.png"
    ];
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const visibleThumbnails = adventuresThumbnails.slice(currentStartIndex, currentStartIndex + 3);

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
}

export default Carousel;