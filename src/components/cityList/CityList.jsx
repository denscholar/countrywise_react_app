/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
// import PropTypes from "prop-types";
import styles from './CityList.module.css'
import Spinner from '../spinner/Spinner'
import CityItem from '../cityItem/cityItem'
import Message from '../message/Message'
import { CitiesContext } from '../../context/CitiesContext'

const CityList = () => {
    const { isLoading, error, cities } = useContext(CitiesContext)

    if (isLoading) return <Spinner />
    if (error) return (<h3>An error occured</h3>)
    if (!cities.length) return (
        <Message message="Add your first city by clicking on a city on the map" />

    )

    return (
        <ul className={styles.cityList}>
            {cities.map((city) => <CityItem city={city} key={city.id} />
            )}
        </ul>
    )
}


export default CityList