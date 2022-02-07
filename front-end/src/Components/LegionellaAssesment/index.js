import React, {useState} from 'react';
import { useGlobalContext } from "../../Context/appContext";
import "./legionellaAssessment.css";
import {legionellaEvaluationData} from "../../Data/legionellaAssesment";
import ProgressBar from '../ProgressBar';



const LegionellaEvaluation = () => {
    
    const {isLegionellaEvaluationOpen} = useGlobalContext()

    const [legPage, setLegPage] = useState(0)
    
    const prevPage = (event) => {
        event.preventDefault()
        setLegPage(legPage - 1)
    }

    const nextPage = (event) => {
        event.preventDefault()
        setLegPage(legPage + 1)
    }

    const submitEvaluation = () => {

    }

    

    return(
        <div className="quizzDisplay">
            {isLegionellaEvaluationOpen ? (
                <div className='quizz-column'>
                    <form className='form-img form-display '>
                        <p className="quizz-title">Legionella Danger Assessment</p>
                        <p className="quizz-question">{legionellaEvaluationData[legPage].Question}</p>
                        <button className="quizz-radio" type="button">{legionellaEvaluationData[legPage].a}</button>
                        <button className="quizz-radio" type="button">{legionellaEvaluationData[legPage].b}</button>
                        <button className="quizz-radio" type="button">{legionellaEvaluationData[legPage].c}</button>
                        <button className="quizz-radio" type="button">{legionellaEvaluationData[legPage].d}</button>
                        <div className="quizz-btn-container">
                            <button className="next-question" type="button" onClick={prevPage}>Previous</button>
                            <button className="next-question" type="button" onClick={nextPage}>Next</button>
                        </div>
                      
                        <button type="button" onClick={submitEvaluation}>Submit</button>
                        <ProgressBar completed={60} bgcolor={"#6a1b9a"}/>
                    </form>
          
                </div>) : null }
        </div>
    )
}

export default LegionellaEvaluation;