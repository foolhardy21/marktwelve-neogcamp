import React, { useState } from 'react'

const Area = () => {
    const [height, setHeight] = useState('')
    const [base, setBase] = useState('')
    const [area, setArea] = useState('')

    function calculateResult(e) {
        e.preventDefault()
        const h = parseInt(height)
        const b = parseInt(base)
        const ar = (b*h)/2
        setArea(ar)
    }
    return (
        <div>
            <h3>calculate area of a triangle</h3>
            <form onSubmit={calculateResult}>
                <label htmlFor='baseinput'>enter base value</label>
                <input type='number' value={base} onChange={(e) => setBase(e.target.value)} name='baseinput' /><br />
                <label htmlFor='heightinput'>enter height value</label>
                <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} name='heightinput' /><br />
                <input type='submit' value='calculate' />
            </form>
            {
                area && `The area of triangle is ${area}`
            }
        </div>
    )
}
export default Area