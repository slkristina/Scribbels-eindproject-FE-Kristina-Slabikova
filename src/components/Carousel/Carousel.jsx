import React, {useState} from "react";
import './Carousel.css';


function Carousel() {
    const adventuresThumbnails = ["Episode1", "Episode2", "Episode3", "Episode4", "Episode5"];
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
            <div key={index} className="thumbnail-wrapper">
                {thumbnail}
            </div>
        ))

    return (
        <div className="container">
            <div className="carousel-wrapper">
                <div className="thumbnail-wrapper">
                    <button className="carousel-nav-btn" onClick={returnBack} disabled={currentStartIndex === 0}>
                        Back
                    </button>
                    <div className="carousel-thumbnails">
                        {renderedThumbnails}
                    </div>
                    <button className="carousel-nav-btn" onClick={goForward}
                            disabled={currentStartIndex === adventuresThumbnails.length - 1}>
                        Forward
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Carousel;