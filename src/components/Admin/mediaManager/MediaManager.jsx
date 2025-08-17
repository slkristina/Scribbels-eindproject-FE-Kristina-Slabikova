import React, {useEffect, useState} from 'react';
import axios from "axios";

function MediaManager(props) {
    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        axios
            .get("https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/adventures")
            .then(response => {
                const data = response.data.documents?.map(doc => ({
                    id: doc.name.split("/").pop(),
                    title: doc.fields?.title?.stringValue || "",
                    youtubeUrl: doc.fields?.youtube_url?.stringValue || null,
                    spotifyUrl: doc.fields?.spotify_url?.stringValue || null,
                    thumbnailUrl: doc.fields?.thumbnail_url?.stringValue || null,
                    omgeving: doc.fields?.omgeving?.arrayValue?.values?.map(v => v.stringValue) || [],
                    seizoen: doc.fields?.seizoen?.arrayValue?.values?.map(v => v.stringValue) || [],
                })) || [];

                setMediaData(data);
            })
            .catch(err => console.error("error fetching adventures:", err));
    }, []);

    return (
        <>
            <h1>
                Media Manager
            </h1>
            <div>
                {mediaData.map(adventure => {
                    return (
                        <div>
                            <span>{adventure.id}</span>
                            <span>{adventure.title}</span>
                            <span>{adventure.youtubeUrl}</span>
                            <span>{adventure.spotifyUrl}</span>
                            <span>{adventure.thumbnailUrl}</span>
                            <span>{adventure.omgeving}</span>
                            <span>{adventure.seizoen}</span>
                        </div>
                    )})
                }
            </div>
        </>
    )
}

export default MediaManager;