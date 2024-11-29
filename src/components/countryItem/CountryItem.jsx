/* eslint-disable react/prop-types */
import React from 'react'
import styles from './CountryItem.module.css'


const CountryItem = ({country}) => {  

    return (
        <div>
          <li className={styles.countryItem}>
            <span className={styles.emoji}>{country.emoji}</span>
            <h3 className={styles.name}>{country.country}</h3>
          </li>
        </div>
      )
}

export default CountryItem