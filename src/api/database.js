import axios from "axios";
import {firebaseConfig} from "../firebase/firebaseConfig.js";

const baseURL = firebaseConfig.base_url;
const projectId = firebaseConfig.projectId

export const fetchAllItems = async (collectionName) => {
    const res = await axios.get(`${baseURL}/v1/projects/${projectId}/databases/(default)/documents/${collectionName}`);
    return res.data;
};

