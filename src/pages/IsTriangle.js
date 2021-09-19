import React, { useState } from 'react'

const IsTriangle = () => {
    const [angle1, setAngle1] = useState('')
    const [angle2, setAngle2] = useState('')
    const [angle3, setAngle3] = useState('')
    const [message, setMessage] = useState('')

    function checkIfTriangle(e) {
        e.preventDefault()
        const a = parseInt(angle1)
        const b = parseInt(angle2)
        const c = parseInt(angle3)
        if(a + b + c === 180) {
            setMessage('Yes it is')
        } else {
            setMessage('No its not')
        }
        setTimeout(() => {
            setMessage('')
        },3000)
    }

    return (
        <div>
            <h3>Angles of a Triangle</h3>
            <form onSubmit={checkIfTriangle}>
                <label htmlFor='1angle'>angle 1</label>
                <input name='1angle' type='number' required value={angle1} onChange={(e) => setAngle1(e.target.value)} /><br />
                <label htmlFor='2angle'>angle 2</label>
                <input name='2angle' type='number' required value={angle2} onChange={(e) => setAngle2(e.target.value)}/><br />
                <label htmlFor='3angle'>angle 3</label>
                <input name='3angle' type='number' required value={angle3} onChange={(e) => setAngle3(e.target.value)}/><br />
                <input type='submit' value='is it?'/>
            </form>
            {
                message && `${message}`
            }
        </div>
    )
}
export default IsTriangle