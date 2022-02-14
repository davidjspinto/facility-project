import React from "react";
import {Link, useParams} from "react-router-dom"
import {Navbar, Sidebar} from "../../Components";
import { useGlobalContext } from "../../Context/appContext";
import "./singleFacility.css";
import "../Dashboard/dashboard.css";

const SingleFacility = () => {
   
    let params = useParams();
    return(
        <div className="facilities-display">
            <Navbar />
            <div className="sidebar-and-content">
                <Sidebar />
                <h2>Facility {params.facilityName}</h2>
                
            </div>
            <div>
                <p>Equipments and requisites</p>
                <p>Last Legionella Analysis Results</p>
                <p>Last IAQ Analysis Results</p>
            </div>
            <div className="actions-available">
                <button className="actions-btn" type="button">Add Equipments and Systems</button>
                <button className="actions-btn" type="button">Legionalla history</button>
                <button className="actions-btn" type="button">QAI history</button>
            </div>
        

        </div>
    )
}


export default SingleFacility;