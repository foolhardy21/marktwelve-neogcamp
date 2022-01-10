import React, { useState } from 'react'
import styles from './IsTriangle.module.css'

const IsTriangle = () => {
    const [angle1, setAngle1] = useState('')
    const [angle2, setAngle2] = useState('')
    const [angle3, setAngle3] = useState('')
    const [message, setMessage] = useState('')

    const checkIfTriangle = e => {
        e.preventDefault()
        const a = parseInt(angle1)
        const b = parseInt(angle2)
        const c = parseInt(angle3)
        if(a + b + c === 180) {
            setMessage('Yes it is a triangle')
        } else {
            setMessage('No its not a triangle')
        }
        setTimeout(() => {
            setMessage('')
        },3000)
    }

    return (
        <div>
            <h3 className={styles.istri_heading}>Angles of a Triangle</h3>
            <form className={styles.istri_form} onSubmit={checkIfTriangle}>
                <label htmlFor='1angle'>angle 1</label>
                <input className={styles.istri_input} name='1angle' type='number' required value={angle1} onChange={(e) => setAngle1(e.target.value)} /><br />
                <label htmlFor='2angle'>angle 2</label>
                <input className={styles.istri_input} name='2angle' type='number' required value={angle2} onChange={(e) => setAngle2(e.target.value)}/><br />
                <label htmlFor='3angle'>angle 3</label>
                <input className={styles.istri_input} name='3angle' type='number' required value={angle3} onChange={(e) => setAngle3(e.target.value)}/><br />
                <input className={styles.istri_submit} type='submit' value='is it?'/>
            </form>
            <div className={styles.istri_verdict}>{
                message && `${message}`
            }</div>
        </div>
    )
}
export default IsTriangle