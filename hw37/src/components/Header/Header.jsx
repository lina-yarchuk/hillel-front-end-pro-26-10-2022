import React from 'react'
import logoImage from '../../assets/img/smiley.jpg'

import styles from './Header.module.scss'

const Header = () => {
	return (
		<div className={styles.header}>
			<img src={logoImage} alt='logo' height='50'/>
			<div className={styles.wrapper}>
				<h1>React Formik</h1>
			</div>
		</div>
	)
}

export default Header;
