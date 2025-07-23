import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC1amjd3zL34JGkHpdeGnEQKqmGC5SACKU",
    authDomain: "scribbels-b3ffe.firebaseapp.com",
    projectId: "scribbels-b3ffe",
    storageBucket: "scribbels-b3ffe.firebasestorage.app",
    messagingSenderId: "232553743419",
    appId: "1:232553743419:web:a3bdd6bafdde017dbfc81e",
    base_url: "https://firestore.googleapis.com"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
