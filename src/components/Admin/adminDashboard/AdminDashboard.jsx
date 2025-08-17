import React, {useState} from "react";
import AdminSidebar from "../adminSideBar/AdminSidebar.jsx";
import AdminMainPanel from "../adminMainPanel/AdminMainPanel.jsx";
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