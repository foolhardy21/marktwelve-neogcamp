import React, { useState } from 'react'

const Hypotenuse = () => {
    const [height, setHeight] = useState('')
    const [base, setBase] = useState('')
    const [hypotenuse, setHypotenuse] = useState('')

    function calculateResult(e) {
        e.preventDefault()
        const h = parseInt(height)
        const b = parseInt(base)
        const ht = Math.round(Math.sqrt((h*h) + (b*b))*100)/100
        setHypotenuse(ht)
    }
    return (
        <div>
            <h3>calculate hypotenuse of a triangle</h3>
            <form onSubmit={calculateResult}>
                <label htmlFor='baseinput'>enter base value</label>
                <input type='number' value={base} onChange={(e) => setBase(e.target.value)} name='baseinput' /><br />
                <label htmlFor='heightinput'>enter height value</label>
                <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} name='heightinput' /><br />
                <input type='submit' value='calculate' />
            </form>
            {
                hypotenuse && `The hypotenuse is ${hypotenuse}`
            }
        </div>
    )
}
export default Hypotenuse