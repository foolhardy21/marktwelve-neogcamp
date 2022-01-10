import React, { useState } from 'react'
import questions from './quizdata'
import styles from './Quiz.module.css'

const Quiz = () => {

    const [answers, setAnswers] = useState({
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
    })
    const [result, setResult] = useState('')

    const calculateScore = e => {
        e.preventDefault()
        let points = 0
        for(const index in answers) {
            if (answers[index].includes(questions[index].ans)) {
                points++    
            }
        }
        setResult(`You scored ${points} points out of 5.`)
    }
    const updateValue = e => {
        const index = e.target.name
        const value = e.target.value
        let newanswers = {...answers}
        newanswers[index] = value
        setAnswers({...newanswers})
    }
    
    return (
        <div>
            <h3 className={styles.quiz_heading}>Quiz on triangles</h3>
            <form className={styles.quiz_form} onSubmit={calculateScore}>
                {
                    questions.map((qset, index1) => {
                        return (
                            <div className={styles.quiz_qset} key={index1}>
                                {qset.ques}
                                <div className={styles.quiz_radiogrp} onChange={updateValue}>
                                {
                                    qset.options.map((option, index) => {
                                        return <label className={styles.quiz_label} key={index} htmlFor={`option${index}`}>
                                                <input id={`option${index}`} type='radio' name={`${index1}`} value={option}/>
                                                {option}
                                            </label>
                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
                <input className={styles.quiz_submit} type='submit' value='submit' />
            </form>
            <div className={styles.quiz_verdict}>{
                result && `${result}`
            }</div>
        </div>
    )
}
export default Quiz