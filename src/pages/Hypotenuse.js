import React, { useState } from 'react'
import styles from './Hypotenuse.module.css'

const Hypotenuse = () => {
    const [height, setHeight] = useState('')
    const [base, setBase] = useState('')
    const [hypotenuse, setHypotenuse] = useState('')

    function calculateResult(e) {
        e.preventDefault()
        if(!height || !base) {
            setHypotenuse('__')
        } else {

            const h = parseInt(height)
            const b = parseInt(base)
            const ht = Math.round(Math.sqrt((h*h) + (b*b))*100)/100
            setHypotenuse(ht)
        }
    }
    return (
        <div>
            <h3 className={styles.hypt_heading}>calculate hypotenuse of a triangle</h3>
            <form className={styles.hypt_form} onSubmit={calculateResult}>
                <label htmlFor='baseinput'>enter base value</label>
                <input className={styles.hypt_input} type='number' value={base} onChange={(e) => setBase(e.target.value)} name='baseinput' /><br />
                <label htmlFor='heightinput'>enter height value</label>
                <input className={styles.hypt_input} type='number' value={height} onChange={(e) => setHeight(e.target.value)} name='heightinput' /><br />
                <input className={styles.hypt_submit} type='submit' value='calculate' />
            </form>
            <div className={styles.hypt_verdict}>{
                hypotenuse && `The hypotenuse is ${hypotenuse}`
            }</div>
        </div>
    )
}
export default Hypotenuse