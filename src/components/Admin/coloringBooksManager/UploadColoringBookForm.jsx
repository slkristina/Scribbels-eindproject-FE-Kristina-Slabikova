import React, {useState} from "react";
import {db} from "../../../firebase/firebaseConfig.js";
import {addDoc, collection} from "firebase/firestore";

function UploadColoringBookForm() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (file.type !== "image/svg+xml") {
            alert("Alleen .svg bestanden toegestaan");
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => setImage(e.target.result)
        reader.readAsText(file);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const data = {
                title: title,
                image: image,
                createdAt: new Date().toISOString()
            };

            await addDoc(collection(db, "coloringBooks"), data);
            alert("Uw verhaal is opgeslagen");

            handleReset();
        } catch (error) {
            alert("Fout bij het opslaan!");
            console.error(error);
        }
    }

    function handleReset() {
        setTitle("");
        setImage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">
                Titel (verplicht)
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>

            <label htmlFor="image">
                Kleurplaat in .svg formaat (verplicht)
                <input
                    id="image"
                    type="file"
                    name="image"
                    accept={".svg"}
                    onChange={handleFileUpload}
                    required
                />
            </label>
            <button type="submit">
                Creëren!
            </button>
            <button type="button"
                    onClick={handleReset}>
                Reset
            </button>
        </form>
    );
}

export default UploadColoringBookForm;

