import React, {useEffect, useState} from 'react';
import axios from "axios";
import './AdventureManager.css'

function AdventureManager() {
    const [adventureData, setAdventureData] = useState([]);

    async function handleDeleteAdventure(id) {
        const zekerWeten = confirm("Weet je zeker dat je dit avontuur wilt verwijderen?")
        if (zekerWeten) {
            try {
                await axios.delete(`https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures/${id}`);
                setAdventureData(prevState => adventureData.filter(adventure => adventure.id !== id))
            } catch (err) {
                console.error(err.message);
            }
        }
    }

    async function fetchAdventures() {
        try {
            const response = await axios.get(
                "https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures"
            );
            const adventures = response.data.documents?.map(doc => ({
                id: doc.name.split("/").pop(),
                title: doc.fields?.title?.stringValue || "",
                youtubeUrl: doc.fields?.youtube_url?.stringValue || null,
                spotifyUrl: doc.fields?.spotify_url?.stringValue || null,
                thumbnailUrl: doc.fields?.thumbnail_url?.stringValue || null,
                omgeving: doc.fields?.omgeving?.arrayValue?.values?.map(v => v.stringValue) || [],
                seizoen: doc.fields?.seizoen?.arrayValue?.values?.map(v => v.stringValue) || [],
            })) || [];

            setAdventureData(adventures);
            console.log(adventures)
        } catch (err) {
            console.error("Error fetching messages", err.message);
        }
    };

    useEffect(() => {
        fetchAdventures();
    }, []);

    return (
        <>
            {adventureData ?
                adventureData.map((adventure) => {
                    return (
                        <div className={"adventure-row"} key={adventure.id}>
                            <img id={"adventure-thumbnail"} src={adventure.thumbnailUrl} alt={adventure.title}/>
                            <div className={"adventure-row-title"}><p>{adventure.title}</p></div>
                            <button type="button" onClick={() => handleDeleteAdventure(adventure.id)}>🗑️</button>
                        </div>
                    )
                })
                :
                <p>Er zijn geen avonturen gevonden in de database</p>}
        </>

    );
}

export default AdventureManager;