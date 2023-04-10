import React from 'react'
import logoImage from '../../assets/img/smiley.jpg'


import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<img src={logoImage} alt='logo' height='50'/>
			</div>
			<div className={styles.wrapper}>
				<h1>Сhoose the best smiley ;)</h1>
			</div>
		</div>
	)
}

export default Header;
