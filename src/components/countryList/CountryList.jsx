/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import Spinner from '../spinner/Spinner'
import Message from '../message/Message'
import styles from './CountryList.module.css'
import CountryItem from '../countryItem/CountryItem'
import { CitiesContext } from '../../context/CitiesContext'


const CountryList = () => {
    const { isLoading, error, cities } = useContext(CitiesContext)

    if (isLoading) return <Spinner />
    if (error) return (<h3>An error occured</h3>)
    if (!cities.length) return (
        <Message message="Add your first city by clicking on a city on the map" />

    )

    const countriesArray = cities.map(country => ({
        country: country.country,
        emoji: country.emoji,
        date: country.date,
        notes: country.notes,
        position: country.position,
        id: country.id
    }));

    // console.log(countries);




    // const countries = cities.reduce((arr, city) => {
    //     // Check if the country is already in the array
    //     if (!arr.map((el) => el.country).includes(city.country)) {
    //         // Add the country and emoji if it's not already included
    //         return [...arr, { country: city.country, emoji: city.emoji }];
    //     }
    //     return arr; // Return the existing array if the country is already included
    // }, []);

    return (
        <ul className={styles.cityList}>
            {countriesArray.map((country) => <CountryItem country={country} key={country.id} />
            )}
        </ul>
    )
}
export default CountryList