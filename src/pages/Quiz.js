import React, { useState } from 'react'
import questions from './quizdata'

const Quiz = () => {

    const [answers, setAnswers] = useState({
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
    })
    const [result, setResult] = useState('')

    function calculateScore(e) {
        e.preventDefault()
        let points = 0
        for(const index in answers) {
            if (answers[index].includes(questions[index].ans)) {
                points++    
            }
        }
        setResult(`You scored ${points} points out of 5.`)
    }
    function updateValue(e) {
        const index = e.target.name
        const value = e.target.value
        let newanswers = {...answers}
        newanswers[index] = value
        setAnswers({...newanswers})
    }
    
    return (
        <div>
            <h3>Quiz on triangles</h3>
            <form onSubmit={calculateScore}>
                {
                    questions.map((qset, index1) => {
                        return (
                            <div key={index1}>
                                {qset.ques}
                                <div onChange={updateValue}>
                                {
                                    qset.options.map((option, index) => {
                                        return <label key={index} htmlFor={`option${index}`}>
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
                <input type='submit' value='submit' />
            </form>
            {
                result && `${result}`
            }
        </div>
    )
}
export default Quiz