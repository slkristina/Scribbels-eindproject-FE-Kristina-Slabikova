import axios from "axios";
import {firebaseConfig} from "../firebase/firebaseConfig";

export const loginAdmin = async (email, password) => {

    try {
        const res = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
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
