import React from "react";
import "./navbar.css";
import { useGlobalContext } from "../../Context/appContext";

const Navbar = () => {
    const {startRegisterLogin, user} = useGlobalContext();

    return(
        <div className="navbar">
            <p className="navbar-title">Facilities Indoor Quality</p>
                        
            {!user ? <button type="button" className="navbar-btn" onClick={startRegisterLogin}>Login/ Register</button> :
           (<p>Logout</p>) 
            }
        </div>
    )
}

export default Navbar;