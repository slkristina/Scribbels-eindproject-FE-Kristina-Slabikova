import React from 'react';

function MessageCard({id, timeCreated, name, email, subject, message}) {

    return (
        <div>
            <p>Ontvangen op: {timeCreated}</p>
            <p>Afzender: {name} </p>
            <p>Email-adres: {email}</p>
            <p>Onderwerp: {subject}</p>
            <p>Bericht: {message}</p>
        </div>
    );
}

export default MessageCard;