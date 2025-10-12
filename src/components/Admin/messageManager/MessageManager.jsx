import React, {useEffect, useState} from 'react';
import axios from "axios";
import MessageCard from "../../MessageCard/MessageCard.jsx";

function MessageManager() {
    const [messageData, setMessageData] = useState([]);

    const fetchMessages = async () => {
        try {
            const response = await axios.get(
                "https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/messages"
            );
            const messages = response.data.documents?.map(doc => ({
                id: doc.name.split("/").pop(),
                name: doc.fields?.name?.stringValue || "",
                email: doc.fields?.email?.stringValue || null,
                message: doc.fields?.message?.stringValue || null,
                subject: doc.fields?.subject?.stringValue || null,
                createdAt: doc.fields?.createdAt?.timestampValue || null
            })) || [];

            setMessageData(messages);
        } catch (err) {
            console.error("Error fetching messages", err.message);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <>
            {messageData ?
                messageData.map(message => {
                    return <MessageCard
                        id={message.id}
                        timeCreated={message.createdAt}
                        name={message.name}
                        email={message.email}
                        subject={message.subject}
                        message={message.message}
                    />
                })
                :
                <p>Er zijn geen berichten</p>}
        </>

    );
}

export default MessageManager;