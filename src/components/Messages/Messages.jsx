import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebase/firebaseconfig.js";
import {useEffect} from "react";


function Messages({name, email, message}) {
    async function sendMessageToFirebase() {
        try {
            await addDoc(collection(db, "messages"), {
                name,
                email,
                message,
                createdAt: new Date(),
            });
        } catch (e) {
            console.error(e);
        }
    }

    window.alert("Jouw bericht is succesvol verzonden");

    useEffect(() => {
            sendMessageToFirebase();
        },
        []);
}

export default Messages;