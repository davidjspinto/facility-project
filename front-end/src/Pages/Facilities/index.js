import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Sidebar} from "../../Components";
import { useGlobalContext } from "../../Context/appContext";
import "./facilities.css";

const Facilities = () => {
   const {
        facilityList,
        facilityInputs, 
        isNewFacilityDataOpen,
        openFacility, 
        handleButtonAddFacility, 
        handleAddFacilityFormSubmit, 
        handleFacilityInputChange,
    } = useGlobalContext()
    
    return(
        <div className="facilities-display">
            <Navbar />
            <div className="sidebar-and-content">
            <Sidebar />
            <form className="facility-list-display" onSubmit={handleAddFacilityFormSubmit}>
                <p className="facility-list-title">List of Facilities</p>
        
                <table>
                    <thead><tr>
                        <th>#</th>
                        <th>Facility</th>
                        <th>Location</th>
                        <th>Commands</th>
                    </tr></thead>
                    <tbody>
                        {facilityList.map((addFacility, index)=>{
                            const {facilityName, facilityLocation} = addFacility;
                            return(
                                <tr key={index}>
                                    <td>id</td>
                                    <td>{facilityName}</td>
                                    <td>{facilityLocation}</td>
                                    <td>
                                        <button className="facility-list-btn" type="button">
                                            <Link to={`/dashboard/facility/${facilityName}`}>Open</Link>
                                        </button>
                                        <button type="button">Edit</button>
                                        <button type="button">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                        <tr className={`${isNewFacilityDataOpen ? 'show-new-row' : null}`}>
                            <td></td>
                            <td><input 
                                type="text"
                                className="input-field-facility-list"
                                name="facilityName"
                                value={facilityInputs.facilityName}
                                onChange={handleFacilityInputChange} /></td>
                            <td><input 
                                type="text"
                                className="input-field-facility-list"
                                name="facilityLocation" 
                                value={facilityInputs.facilityLocation}
                                onChange={handleFacilityInputChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="facility-submit-btn" type="button" onClick={handleButtonAddFacility}>Add a new facility</button>
                <button className="facility-submit-btn" type="submit" >Submit</button>
            </form>
            </div>
        </div>
    )
}


export default Facilities;