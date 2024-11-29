import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/productPage/ProductPage';
import HomePage from './pages/homePage/HomePage';
import PricingPage from './pages/pricingPage/PricingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import AppLayout from './pages/appLayout/AppLayout';
import Login from './pages/login/Login';
import CityList from './components/cityList/CityList';
import CountryList from './components/countryList/countryList';
import City from './components/city/City';




const App = () => {

  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const BASE_URL = "http://localhost:8000"


  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList cities={cities} isLoading={isLoading} error={error} />} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} error={error} />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} error={error} />} />
            <Route path="form" element={<p>form to display</p>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


// Here, we add new conditional commands. Combine it with another intruction to allow the space shuttle to proceed only if the color of the instruction is the same as the color of the tile where the space shuttle is.