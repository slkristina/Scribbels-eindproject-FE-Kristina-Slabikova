import React, {useState} from "react";
import {db} from "../../../firebase/FirebaseConfig.js";
import {addDoc, collection} from "firebase/firestore";

function UploadAdventureForm() {
    const [title, setTitle] = useState("");
    const [youtube, setYoutube] = useState("");
    const [spotify, setSpotify] = useState("");
    const [season, setSeason] = useState("Algemeen");
    const [surrounding, setSurrounding] = useState("Overig");

    async function handleSubmit(event) {
        event.preventDefault();

        if (!title || !youtube || !spotify) {
            alert("Vul alle velden in!");
            return;
        }

        try {
            const data = {
                title: title,
                youtube_url: youtube,
                spotify_url:spotify,
                seizoen: [season],
                omgeving: [surrounding],
                thumbnail_url: null,
                createdAt: new Date()
            };

            await addDoc(collection(db, "adventures"), data);
            alert("Uw verhaal is opgeslagen");

            setTitle("");
            setYoutube("");
            setSpotify("");
            setSeason("Algemeen");
            setSurrounding("Overig");
        } catch (error) {
            alert("Fout bij het opslaan!");
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Titel (verplicht)
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>

            <label>
                YouTube-link (verplicht)
                <input
                    type="url"
                    value={youtube}
                    name="youtube_url"
                    onChange={(e) => setYoutube(e.target.value)}
                    required
                />
            </label>

            <label>
                Spotify-link (verplicht)
                <input
                    type="url"
                    value={spotify}
                    name="spotify_url"
                    onChange={(e) => setSpotify(e.target.value)}
                    required
                />
            </label>

            <label>
                Seizoen
                <select
                    value={season} onChange={(e) => setSeason(e.target.value)}>
                    <option>Algemeen</option>
                    <option>Lente</option>
                    <option>Zomer</option>
                    <option>Herfst</option>
                    <option>Winter</option>
                </select>
            </label>

            <label>
                Omgeving
                <select
                    value={surrounding} onChange={(e) => setSurrounding(e.target.value)}>
                    <option>Overig</option>
                    <option>Zee</option>
                    <option>Rivier</option>
                    <option>Bos</option>
                    <option>Woestijn</option>
                    <option>Huis en tuin</option>
                </select>
            </label>

            <button type="submit">
                Creëren!
            </button>
        </form>
    );
}

export default UploadAdventureForm;

