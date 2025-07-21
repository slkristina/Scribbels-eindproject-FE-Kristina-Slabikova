import axios from "axios";
import {useEffect, useState} from "react";
import Carousel from "../../components/Carousel/Carousel.jsx";

function AdventuresPage() {

    return (
        <>
            <div className="container">
                <h1>
                    Adventures
                </h1>
                <h2>
                    Je kunt onze verhaaltjes (voor)lezen en beluisteren op YouTube en Spotify. Of download de e-book van
                    het verhaaltje.
                </h2>
                <p>
                    Seizoen: Algemeen, Lente, Zomer, Herfst, Winter
                </p>
                <p>
                    Omgeving: Zee, Rivier, Bos, Woestijn, Huis en tuin, Overig
                </p>
                <Carousel />
            </div>
        </>
    )
}

export default AdventuresPage;