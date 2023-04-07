import React from 'react';
import styles from './Sidebar.module.scss'

function Sidebar({isMenuOpen}) {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.menuItems}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Sidebar;
