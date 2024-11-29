import React from 'react'
import styles from './Map.module.css'
import { useSearchParams } from 'react-router-dom'

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  console.log(setSearchParams);
  
  return (
    <div className={styles.mapContainer}>
      Position: {lat} {lng}
    </div>
  )
}

export default Map