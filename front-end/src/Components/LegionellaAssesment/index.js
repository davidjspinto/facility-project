import React, {useState} from 'react';
import "./legionellaAssessment.css";
import {legionellaEvaluationData} from "../../Data/legionellaAssesment";

const LegionellaEvaluation = () => {

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
        <div>
            <form className='form-display'>
                <p>{legionellaEvaluationData[legPage].Question}</p>
                <button type="button">{legionellaEvaluationData[legPage].a}</button>
                <button type="button">{legionellaEvaluationData[legPage].b}</button>
                <button type="button">{legionellaEvaluationData[legPage].c}</button>
                <button type="button">{legionellaEvaluationData[legPage].d}</button>
                <div>
                    <button type="button" onClick={prevPage}>Previous Question</button>
                    <button type="button" onClick={nextPage}>Next Question</button>
                </div>
                <button type="button" onClick={submitEvaluation}>Submit</button>
            </form>
        </div>
    )
}

export default LegionellaEvaluation;