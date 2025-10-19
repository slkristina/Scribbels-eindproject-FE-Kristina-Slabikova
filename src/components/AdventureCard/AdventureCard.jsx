import React from 'react';
import './AdventureCard.css';
import {firebaseApi} from "../../util/fetchers.jsx";

function AdventureCard({adventure, adventureData, setAdventureData}) {

    async function handleDeleteAdventure(id) {
        const zekerWeten = confirm("Weet je zeker dat je dit avontuur wilt verwijderen?")
        if (zekerWeten) {
            try {
                await firebaseApi.delete(`/adventures/${id}`);
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