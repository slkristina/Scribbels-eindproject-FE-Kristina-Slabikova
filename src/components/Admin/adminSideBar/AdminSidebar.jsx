import React from "react";
import "./AdminSidebar.css";
import {useNavigate} from "react-router-dom";

function AdminSidebar({activeTab, setActiveTab}) {
    const navigate = useNavigate();

    return (
        <nav aria-label="Admin Dashboard Navigation" className="admin-sidebar-container">


            <button
                type="button"
                className={activeTab === "uploadAdventure" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("uploadAdventure")}>
                Upload nieuw verhaal
            </button>

            <button
                type="button"
                className={activeTab === "uploadColoringPicture" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("uploadColoringPicture")}>
                Upload Kleurplaten
            </button>

            <button
                type="button"
                className={activeTab === "messageManager" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("messageManager")}>
                Message Manager
            </button>

            <button
                type="button"
                className={activeTab === "adventureManager" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("adventureManager")}>
                Avonturen Manager
            </button>

        </nav>
    )
}

export default AdminSidebar;