import React from 'react';
import axios from "axios";
import './MessageCard.css';
import formatDutchDate from "../../util/helpers.jsx";

function MessageCard({id, timeCreated, name, email, subject, message, messageData, setMessageData}) {

    async function handleDeleteMessage(id) {
        const zekerWeten = confirm("Weet je zeker dat je dit bericht wilt verwijderen?");
        if (zekerWeten) {
            try {
                await axios.delete(`https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/messages/${id}`);
                setMessageData(_ => messageData.filter(message => message.id !== id))
            } catch (err) {
                console.error(err.message);
            }
        }
    }

    return (
        <div className={"messageCard"}>
            <div className={"messageCard-content"}>
                <div className={"messageCard-content-top"}>
                    <section><b>Afzender:</b> {name} ({email})</section>

                    <section><b>Ontvangen op:</b> {formatDutchDate(timeCreated)}</section>
                </div>
                <div className={"messageCard-content-middle"}>
                    <b>Onderwerp:</b> {subject ? subject : "Geen onderwerp ingevuld"}
                </div>
                <div className={"messageCard-content-bottom"}>
                    <section><b>Bericht:</b></section>
                    <section>{message}</section>

                </div>
            </div>
            <button type="button" onClick={() => handleDeleteMessage(id)}>🗑️</button>
        </div>
    );
}

export default MessageCard;