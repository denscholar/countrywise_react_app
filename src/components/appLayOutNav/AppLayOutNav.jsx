import React from 'react'
import styles from './AppLayOutNav.module.css'
import { NavLink } from 'react-router-dom'


const AppLayOutNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><NavLink to="cities">Cities</NavLink></li>
        <li><NavLink to="countries">Countries</NavLink></li>
      </ul>
    </nav>
  )
}

export default AppLayOutNav