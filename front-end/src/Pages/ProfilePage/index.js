import React from "react";
import {Navbar, Sidebar, ProfileForm} from "../../Components";
import { useGlobalContext } from "../../Context/appContext";
import "./profilePage.css";

const Profile = () => {
    
    const {addCompanyInfo} = useGlobalContext()

    return(
        <div className="profile-display">
            <Navbar />
            <div className="sidebar-and-content">
                <Sidebar />
                <ProfileForm />
                <div className="profile-column1">
                    <p className="picture-layout">Picture</p>
                </div>
                <div className="profile-column2">
                <button className="profile-btn" type="button" onClick={addCompanyInfo}> Update Information </button>
                    <label for ="name">Username</label>
                        <input className="input-field" type="text" disabled/>
                    <label for ="Company">Company</label>
                        <input className="input-field" type="text" disabled/>
                    <label for ="Address">Address</label>
                        <input className="input-field" type="text" disabled/>
                    <label for ="Company">E-mail</label>
                        <input className="input-field" type="email" disabled/>
                    <label for ="Address">Phone Number</label>
                        <input className="input-field" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" disabled/>
                </div>
            </div>          
        </div>
    )
}

export default Profile;