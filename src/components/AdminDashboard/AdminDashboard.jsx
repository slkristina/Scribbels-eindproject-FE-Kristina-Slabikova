import React, {useState} from "react";
import AdminSidebar from "./AdminSidebar.jsx";
import AdminMainPanel from "./AdminMainPanel.jsx";
import "./AdminDashboard.css";

function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("Upload nieuw verhaal");

    return (
        <div className="dashboard-container">
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <AdminMainPanel activeTab={activeTab} />
        </div>
    );
}

export default AdminDashboard;