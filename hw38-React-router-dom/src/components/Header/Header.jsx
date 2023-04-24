import React from 'react'
import { Link } from 'react-router-dom'

import logoImage from '../../assets/img/logo.svg'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logoImage} alt='logo' height='35'/>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    <li className='inline-block mr-4'>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
