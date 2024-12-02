import React, { useContext } from 'react'
import styles from './CityItem.module.css'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { CitiesContext } from '../../context/CitiesContext';

const formatDate = (date) => new Intl.DateTimeFormat("en", {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity } = useContext(CitiesContext)
  // const { cityName, emoji, date, id, position } = currentCity
  const { cityName, emoji, date, id, position } = city;


  return (
    <li>
      <Link className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ""}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
}

export default CityItem