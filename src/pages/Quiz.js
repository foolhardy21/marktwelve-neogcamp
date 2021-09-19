import React from 'react'
import questions from './quizdata'

const Quiz = () => {

    function calculateScore(e) {
        e.preventDefault()
        console.log(e.target)
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
                                <div>
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
        </div>
    )
}
export default Quiz