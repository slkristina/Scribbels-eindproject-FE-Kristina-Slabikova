import './Shop.css';
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

function Shop() {

    const [coloringBooksData, setColoringBooksData] = useState([]);

    useEffect(() => {
        axios
            .get("https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/coloringBooks")
            .then(response => {
                console.log(response.data);
                const coloringBooks = response.data.documents?.map(doc => ({
                    id: doc.name.split("/").pop(),
                    title: doc.fields?.title?.stringValue || "",
                    coloringBookUrl: doc.fields?.coloring_book_url?.stringValue || null,
                })) || [];

                setColoringBooksData(coloringBooks);
            })
            .catch(err => {
                console.log("error fetching coloring books:", err);
            });
    }, []);

    return (
        <div className="container">
            <p>
                Ons winkeltje is nog een beetje leeg, maar daar komt verandering in! Binnenkort kun je hier leuke
                Scribbels-dingetjes bestellen of downloaden.
                Wat je al wel kunt doen is kleurplaten downloaden. Print ze uit, kleur ze in met de prachtigste kleuren
                en stuur een foto naar scribbelsdierenverhaaltjes@gmail.com.
                Wie weet verschijnt jouw tekening op onze Instagram @scribbels.dierenverhaaltjes. We vermelden alleen je
                voornaam en leeftijd.
            </p>
            <h2>
                Onze kleurplaaten
            </h2>
            <div className="coloring-books">
                {coloringBooksData
                    .map((book) => (
                        <ThumbnailCard
                            key={book.id}
                            coloringBookUrl={book.coloringBookUrl}
                            title={book.title}
                        />
                    ))
                }
            </div>
            <section className="donation">
                Wil je ons helpen?
                Wij maken Scribbels Dierenverhaaltjes met veel plezier en passie. Iedereen heeft gratis toegang tot onze
                verhaaltjes. We vinden het belangrijk dat alle kinderen en volwassenen ervan kunnen genieten.
                Met een donatie help je ons om nieuwe Scribbels te blijven publiceren. We zijn dankbaar voor elk bedrag.
                Alvast bedankt!
            </section>
        </div>
    )
}

export default Shop;