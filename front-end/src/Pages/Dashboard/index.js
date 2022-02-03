import React from "react";
import {Navbar, Sidebar} from "../../Components";
import "./dashboard.css";

const Dashboard = () => {
    return(
        <div className="dashboard-display">
            <Navbar />
            <div className="sidebar-and-content">
                <Sidebar />
                <div className="actions-available">
                    <button className="actions-btn" type="button">Add Company Information</button>
                    <button className="actions-btn" type="button">Add User Information</button>
                    <button className="actions-btn" type="button">Visualize Facilities</button>
                    <button className="actions-btn" type="button">Add New Facility</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;