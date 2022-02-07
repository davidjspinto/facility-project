import React from "react";
import {Link, useParams} from "react-router-dom"
import {Navbar, Sidebar} from "../../Components";
import { useGlobalContext } from "../../Context/appContext";
import "./singleFacility.css";

const SingleFacility = () => {
   
    let params = useParams();
    return(
        <div className="facilities-display">
            <Navbar />
            <div className="sidebar-and-content">
            <Sidebar />
            <p>Index {params.facilityName}
           gggggggggggggggg
            </p>
            </div>
        </div>
    )
}


export default SingleFacility;