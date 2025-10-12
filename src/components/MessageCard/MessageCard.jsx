import React from 'react';

function MessageCard(message) {

    return (
        <div>
            <p>Ontvangen op: {message.timeCreated}</p>
            <p>Afzender: {message.name} </p>
            <p>Email-adres: {message.email}</p>
            <p>Onderwerp: {message.subject}</p>
            <p>Bericht: {message.message}</p>
        </div>
    );
}

export default MessageCard;