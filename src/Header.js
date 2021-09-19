import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/is-triangle'>Is Triangle</Link>
                </li>
                <li>
                    <Link to='/quiz'>Quiz</Link>
                </li>
                <li>
                    <Link to='/hypotenuse'>Hypotenuse</Link>
                </li>
                <li>
                    <Link to='/area'>Area of Triangle</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header