import React from 'react'
import styles from './AppLayOut.module.css'
import SideBar from '../../components/sidebar/SideBar'
import Map from '../../components/map/Map'


const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  )
}

export default AppLayout