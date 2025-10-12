import React from "react";
import "./AdminSidebar.css";
import {useNavigate} from "react-router-dom";
import {handleLogout} from "../../../context/AuthContext.jsx";

function AdminSidebar({activeTab, setActiveTab}) {
    const navigate = useNavigate();

    return (
        <nav aria-label="Admin Dashboard Navigation" className="admin-sidebar-container">
            <h1>Admin Dashboard</h1>

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
                className={activeTab === "mediaManager" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("mediaManager")}>
                Media Manager
            </button>

            <button
                type="button"
                className={"sidebar-btn"}
                onClick={handleLogout}>
                Log Out
            </button>
        </nav>
    )
}

export default AdminSidebar;