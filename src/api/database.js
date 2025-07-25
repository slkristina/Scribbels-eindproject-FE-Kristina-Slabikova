import axios from "axios";
import {FirebaseConfig} from "../../firebase/FirebaseConfig.js";

const baseURL = FirebaseConfig.base_url;
const projectId = FirebaseConfig.projectId

export const fetchAllItems = async (collectionName) => {
    const res = await axios.get(`${baseURL}/v1/projects/${projectId}/databases/(default)/documents/${collectionName}`);
    return res.data;
};

