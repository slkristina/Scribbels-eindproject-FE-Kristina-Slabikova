import React from "react";
import "./AdminSidebar.css";

function AdminSidebar({activeTab, setActiveTab}) {
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
                className={activeTab === "logout" ? "active sidebar-btn" : "sidebar-btn"}
                onClick={() => setActiveTab("logout")}>
                Log Out
            </button>
        </div>
    )
}

export default AdminSidebar;