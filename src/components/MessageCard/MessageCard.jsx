import React from 'react';
import axios from "axios";

function MessageCard({id, timeCreated, name, email, subject, message}) {

    async function deleteMessage(id) {
        try {
            const response = await axios.delete(
                `https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/messages/${id}`);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <p>Ontvangen op: {timeCreated}</p>
            <p>Afzender: {name} ({email})</p>
            <p>Onderwerp: {subject}</p>
            <p>Bericht: {message}</p>
            <button type="button" onClick={() => deleteMessage(id)}>
                Verwijder bericht
            </button>
        </div>
    );
}

export default MessageCard;