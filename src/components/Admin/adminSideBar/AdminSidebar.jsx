import React from "react";
import "./AdminSidebar.css";
import {auth} from "../../../firebase/firebaseconfig.js";
import {useNavigate} from "react-router-dom";

function AdminSidebar({activeTab, setActiveTab}) {
    const navigate = useNavigate();

    function handleLogout() {
        auth.signOut()
            .then(() => navigate("/"))
            .catch((error) => console.error(error))
    }


    return (
        <div className="admin-sidebar-container">
            <h2>Admin Dashboard</h2>

            <button
                className={activeTab === "uploadAdventure" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("uploadAdventure")}>
                Upload nieuw verhaal
            </button>

            <button
                className={activeTab === "uploadColoringPicture" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("uploadColoringPicture")}>
                Upload Kleurplaten
            </button>

            <button
                className={activeTab === "mediaManager" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("mediaManager")}>
                Media Manager
            </button>

            <button
                className={"sidebar-btn"}
                onClick={handleLogout}>
                Log Out
            </button>
        </div>
    )
}

export default AdminSidebar;