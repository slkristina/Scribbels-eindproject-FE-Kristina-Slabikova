import axios from "axios";
import {useEffect, useState} from "react";
import Carousel from "../../components/Carousel.jsx";

function AdventuresPage() {
    const [adventures, setAdventures] = useState([]);

    useEffect(() => {
        getAllAdventures()
    }, []);


    async function getAllAdventures() {
        try {
            const response = await axios
                .get(`https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures`,
                    {
                        headers: {
                            Accept: 'application/json',
                        }
                    }
                );

            //     then(response => setAdventures(response.data.documents))
            //         .catch(error => console.error(error))
            // }

            const cleanResponse = response.data.documents.map((doc) => {
                const fields = doc.fields;
                return {
                    id: doc.name.split("/").pop(),title: fields.title?.stringValue || "Untitled",
                    youtube: fields.youtube_url?.stringValue?.replace(/"/g, ""),
                    spotify: fields.spotify_url?.stringValue?.replace(/"/g, ""),
                    animals:
                        fields.animals?.arrayValue?.values?.map((a) => a.stringValue) || [],
                    image: "/assets/thumbnails/Lutra-steekt-zijn-handje-uit.png"
                };
            });

            setAdventures(cleanResponse);
        } catch
            (error) {
            console.error("Error fetching adventures:", error)
        }

    }

    useEffect(() => {
        console.log(adventures);
    }, [adventures]);

    return (
        <>
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

            <Carousel cards={adventures}/>
            {JSON.stringify(adventures)}
        </>
    )
}

export default AdventuresPage;