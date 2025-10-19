import React, {useEffect, useState} from 'react';
import MessageCard from "../../MessageCard/MessageCard.jsx";
import {firebaseApi} from "../../../util/fetchers.jsx";

function MessageManager() {
    const [messageData, setMessageData] = useState([]);

    async function fetchMessages() {
        try {
            const response = await firebaseApi.get("/messages");
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
                messageData.map((messageContent, index) => {
                    return <MessageCard
                        key={messageContent.id + index}
                        messageContent={messageContent}
                        messageData={messageData}
                        setMessageData={setMessageData}
                    />
                })
                :
                <p>Er zijn geen berichten</p>}
        </>

    );
}

export default MessageManager;