import React from 'react'
import styles from './SideBar.module.css'
import Logo from '../logo/Logo'
import AppLayOutNav from '../appLayOutNav/AppLayOutNav'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppLayOutNav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default SideBar