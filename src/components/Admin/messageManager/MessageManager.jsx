import React, {useEffect, useState} from 'react';
import axios from "axios";

function MessageManager(props) {
    const [messageData, setMessageData] = useState([]);

    const fetchMessages = async () => {
        try {
            const response = await axios.get(
                "https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/messages"
            );
            const messages = response.data.documents?.map(doc => ({
                id: doc.name.split("/").pop(),
                name: doc.fields?.title?.stringValue || "",
                email: doc.fields?.youtube_url?.stringValue || null,
                message: doc.fields?.spotify_url?.stringValue || null,
                subject: doc.fields?.thumbnail_url?.stringValue || null,
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
        <div></div>
    );
}

export default MessageManager;