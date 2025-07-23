import axios from "axios";
import {FirebaseConfig} from "../firebase/FirebaseConfig.js";

export const loginAdmin = async (email, password) => {

    try {
        const res = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FirebaseConfig.apiKey}`,
            {
                email,
                password,
                returnSecureToken: true,
            }
        );
        return res.data.idToken;
    } catch (error) {
        throw new Error(error.response?.data?.error?.message || "Login failed");
    }
};
