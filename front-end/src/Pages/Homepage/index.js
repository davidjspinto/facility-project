import React from "react";
import { Navbar, Authentication, LegionellaEvaluation, ProgressBar } from "../../Components";
import { useGlobalContext } from "../../Context/appContext";
import "./homepage.css";


const Homepage = () => {
    const {startLegionellaAssessment, startRegisterLogin} = useGlobalContext();
    return(
        <div >
            <Navbar />
           
            <div className="homepageDisplay">
                <div className="homepage-column1">
                    <p className="survey-description">1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in augue quis erat bibendum blandit eget in diam. Vestibulum volutpat arcu vulputate quam tincidunt consequat. Quisque id purus ac ex accumsan aliquam. Fusce eget turpis massa. Suspendisse laoreet a eros.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat arcu vulputate quam tincidunt consequat. Quisque id purus ac ex accumsan aliquam. Fusce eget turpis massa.</p>
                    <button className ="survey-btn" type="button" onClick={startLegionellaAssessment}>Start Evaluation</button>
                    <LegionellaEvaluation />
                </div>
                <div className="homepage-column2">
                    <p className="survey-description">2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat arcu vulputate quam tincidunt consequat. Quisque id purus ac ex accumsan aliquam. Fusce eget turpis massa.</p>
                    <div className="homepage-btn-display">
                        <button className="contact-btn" type="button" onClick={startRegisterLogin}>Sign In</button>
                        <button className="contact-btn" type="button" >Contact Us</button>
                    </div>
                </div> 
            </div>
            <Authentication />
          
        </div>
    )
}

export default Homepage;