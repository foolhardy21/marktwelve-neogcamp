import React, { useState } from 'react'
import styles from './Area.module.css'

const Area = () => {
    const [height, setHeight] = useState('')
    const [base, setBase] = useState('')
    const [area, setArea] = useState('')

    const calculateResult = e => {
        e.preventDefault()
        if(!height || !base) {
            setArea('__')
        } else {

            const h = parseInt(height)
            const b = parseInt(base)
            const ar = (b*h)/2
            setArea(ar)
        }
    }
    return (
        <div>
            <h3 className={styles.area_heading}>calculate area of a triangle</h3>
            <form className={styles.area_form} onSubmit={calculateResult}>
                <label htmlFor='baseinput'>enter base value</label>
                <input className={styles.area_input} type='number' value={base} onChange={(e) => setBase(e.target.value)} name='baseinput' /><br />
                <label htmlFor='heightinput'>enter height value</label>
                <input className={styles.area_input} type='number' value={height} onChange={(e) => setHeight(e.target.value)} name='heightinput' /><br />
                <input className={styles.area_submit} type='submit' value='calculate' />
            </form>
            <div className={styles.area_verdict}>{
                area && `The area of triangle is ${area}`
            }</div>
        </div>
    )
}
export default Area