/* eslint-disable react/prop-types */
import React from 'react';
import { createContext, useEffect, useState } from "react";
export const CitiesContext = createContext()

export const CitiesProvider = ({ children }) => {
    const [cities, setCities] = useState([])
    const [currentCity, setcurrentCity] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const BASE_URL = "http://localhost:8000"

    useEffect(() => {
        const fetchCities = async () => {
            try {
                setIsLoading(true)
                // Fetch data from an API
                const response = await fetch(`${BASE_URL}/cities`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                // Update state with fetched data
                setCities(result);

            } catch (err) {
                // Handle errors
                setError(err.message)
            } finally {
                // Stop loading
                setIsLoading(false)
            }

        }
        fetchCities();
    }, [])

    const fetchCity = async (id) => {
        try {
            setIsLoading(true)
            // Fetch data from an API
            const response = await fetch(`${BASE_URL}/cities/${id}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();

            // Update state with fetched data
            setcurrentCity(result);

        } catch (err) {
            // Handle errors
            setError(err.message)
        } finally {
            // Stop loading
            setIsLoading(false)
        }

    }

    return <CitiesContext.Provider value={{ cities, isLoading, error, currentCity, fetchCity }}>
        {children}
    </CitiesContext.Provider>
}