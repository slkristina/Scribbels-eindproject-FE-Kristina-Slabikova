import React from 'react';
import axios from "axios";
import './AdventureCard.css';

function AdventureCard({adventure, adventureData, setAdventureData}) {

    async function handleDeleteAdventure(id) {
        const zekerWeten = confirm("Weet je zeker dat je dit avontuur wilt verwijderen?")
        if (zekerWeten) {
            try {
                await axios.delete(`https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures/${id}`);
                setAdventureData(_ => adventureData.filter(adventure => adventure.id !== id))
            } catch (err) {
                console.error(err.message);
            }
        }
    }

    return (
        <div className={"adventure-row"} key={adventure.id}>
            <img id={"adventure-thumbnail"} src={adventure.thumbnailUrl} alt={adventure.title}/>
            <div className={"adventure-row-title"}><p>{adventure.title}</p></div>
            <button type="button" onClick={() => handleDeleteAdventure(adventure.id)}>🗑️</button>
        </div>
    );
}

export default AdventureCard;