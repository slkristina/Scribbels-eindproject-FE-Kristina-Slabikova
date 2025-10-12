import './Shop.css';
import ThumbnailCard from "../../components/ThumbnailCard/ThumbnailCard.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";

function Shop() {

    const [coloringBooksData, setColoringBooksData] = useState([]);

    useEffect(() => {
        axios
            .get("https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/coloringBooks")
            .then(async response => {
                const coloringBooks = response.data.documents?.map(doc => ({
                    id: doc.name.split("/").pop(),
                    title: doc.fields?.title?.stringValue || "",
                    storagePath: doc.fields?.coloring_book_url?.stringValue || null,
                })) || [];


                setColoringBooksData(coloringBooks);
                console.log(coloringBooksData)
            })
            .catch(err => {
                console.log("error fetching coloring books:", err);
            });
    }, []);

    return (
        <main className="container">
            <p>
                Ons winkeltje is nog een beetje leeg, maar daar komt verandering in! Binnenkort kun je hier leuke
                Scribbels-dingetjes bestellen of downloaden.
                Wat je al wel kunt doen is kleurplaten downloaden. Print ze uit, kleur ze in met de prachtigste kleuren
                en stuur een foto naar scribbelsdierenverhaaltjes@gmail.com.
                Wie weet verschijnt jouw tekening op onze Instagram @scribbels.dierenverhaaltjes. We vermelden alleen je
                voornaam en leeftijd.
            </p>

            <section className="coloring-books">
                <h2>
                    Onze kleurplaaten
                </h2>
                <ul>
                    {coloringBooksData
                        .map((book) => (
                            <ThumbnailCard
                                thumbnailUrl={book.storagePath}
                                key={book.id}
                                coloringBookUrl={book.storagePath}
                                title={book.title}
                            />
                        ))
                    }
                </ul>
            </section>

            <section className="donation">
                <h2>Wil je ons helpen?</h2>
                <p>Wij maken Scribbels Dierenverhaaltjes met veel plezier en passie. Iedereen heeft gratis toegang tot onze
                verhaaltjes. We vinden het belangrijk dat alle kinderen en volwassenen ervan kunnen genieten.
                Met een donatie help je ons om nieuwe Scribbels te blijven publiceren. We zijn dankbaar voor elk bedrag.
                Alvast bedankt!</p>
            </section>
        </main>
    )
}

export default Shop;