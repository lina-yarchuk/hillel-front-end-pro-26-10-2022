import React from 'react'
import {menu} from './menu'
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
                    {menu.map(item => (
                        <li key={`menu-item-${item.id}`}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
                <div className={styles.buttons}>
                    <button className={styles['login-button']}>Login</button>
                    <button className={styles['sign-up-button']}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Header;
