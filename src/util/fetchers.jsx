import axios from "axios";

export const firebaseApi = axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/projects/scribbels-b3ffe/databases/(default)/documents/',
    timeout: 1000,
});

export default async function fetchAdventures() {
    try {
        const response = await firebaseApi.get(
            "/adventures"
        );
        return response.data.documents?.map(doc => ({
           id: doc.name.split("/").pop(),
           title: doc.fields?.title?.stringValue || "",
           youtubeUrl: doc.fields?.youtube_url?.stringValue || null,
           spotifyUrl: doc.fields?.spotify_url?.stringValue || null,
           thumbnailUrl: doc.fields?.thumbnail_url?.stringValue || null,
           omgeving: doc.fields?.omgeving?.arrayValue?.values?.map(v => v.stringValue) || [],
           seizoen: doc.fields?.seizoen?.arrayValue?.values?.map(v => v.stringValue) || [],
       })) || [];
    } catch (err) {
        console.error("Error fetching messages", err.message);
    }
}