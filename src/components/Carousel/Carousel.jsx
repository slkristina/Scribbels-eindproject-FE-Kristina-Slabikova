import React, {useState} from "react";
import './Carousel.css';

const adventuresData = [
    {
        id: 1,
        title: "Adventure 1",
        image: "/assets/thumbnails/Lutra-steekt-zijn-handje-uit.png",
    },
    {
        id: 2,
        title: "Adventure 2",
        image: "/assets/thumbnails/Lutra-steekt-zijn-handje-uit.png",
    },
    {
        id: 3,
        title: "Adventure 3",
        image: "/assets/thumbnails/Lutra-steekt-zijn-handje-uit.png",
    },
    {
        id: 4,
        title: "Adventure 4",
        image: "/assets/thumbnails/Lutra-steekt-zijn-handje-uit.png",
    },
    {
        id: 5,
        title: "Adventure 5",
        image: "/assets/thumbnails/Lutra-steekt-zijn-handje-uit.png",
    },
    {
        id: 6,
        title: "Adventure 6",
        image: "/assets/thumbnails/Lutra-steekt-zijn-handje-uit.png",
    }
];

const Carousel = ({cards = adventuresData}) => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 5;

    const handlePrev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prev) =>
            Math.min(prev + 1, cards.length - visibleCount)
        );
    };

    const visibleAdventures = cards.slice(startIndex, startIndex + visibleCount);

    return (
        <div className="carousel-container">
            <button className="nav-button-left" onClick={handlePrev}>
                ◀
            </button>

            <div className="cards-wrapper">
                {visibleAdventures.map((card) => (
                    <div className="adventureCard" key={card.id}>
                        <img src={card.image}
                             alt={card.title}
                             className="thumbnail"
                        />
                        <div className="button-group">
                            <button onClick={() => card.youtube && window.open(card.youtube, "_blank")}>📺</button>
                            <button onClick={() => card.spotify && window.open(card.spotify, "_blank")}>🎧</button>
                            <button>📖</button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="nav-button-right" onClick={handleNext}>▶</button>
        </div>
    );
};

export default Carousel;