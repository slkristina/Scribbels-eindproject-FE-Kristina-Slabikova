import React from 'react';
import './MessageCard.css';
import formatDutchDate from "../../util/helpers.jsx";
import {firebaseApi} from "../../util/fetchers.jsx";

function MessageCard({messageContent, messageData, setMessageData}) {

    async function handleDeleteMessage(id) {
        const zekerWeten = confirm("Weet je zeker dat je dit bericht wilt verwijderen?");
        if (zekerWeten) {
            try {
                await firebaseApi.delete(`/messages/${id}`);
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
                    <section><b>Afzender:</b> {name} ({messageContent.email})</section>

                    <section><b>Ontvangen op:</b> {formatDutchDate(messageContent.createdAt)}</section>
                </div>
                <div className={"messageCard-content-middle"}>
                    <b>Onderwerp:</b> {messageContent.subject ? messageContent.subject : "Geen onderwerp ingevuld"}
                </div>
                <div className={"messageCard-content-bottom"}>
                    <section><b>Bericht:</b></section>
                    <section>{messageContent.message}</section>

                </div>
            </div>
            <button type="button" onClick={() => handleDeleteMessage(messageContent.id)}>🗑️</button>
        </div>
    );
}

export default MessageCard;