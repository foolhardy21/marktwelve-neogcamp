import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <h3 className={styles.title}>triangles</h3>
            <ul className={styles.navigationbar}>
                <li className={styles.navbar_item}>
                    <Link to='/is-triangle'>Is Triangle</Link>
                </li>
                <li className={styles.navbar_item}>
                    <Link to='/quiz'>Quiz</Link>
                </li>
                <li className={styles.navbar_item}>
                    <Link to='/hypotenuse'>Hypotenuse</Link>
                </li>
                <li className={styles.navbar_item}>
                    <Link to='/area'>Area of Triangle</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header