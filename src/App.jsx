import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './pages/productPage/ProductPage';
import HomePage from './pages/homePage/HomePage';
import PricingPage from './pages/pricingPage/PricingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import AppLayout from './pages/appLayout/AppLayout';
import Login from './pages/login/Login';
import CityList from './components/cityList/CityList';
import CountryList from './components/countryList/countryList';
import City from './components/city/City';
import Form from './components/form/Form';




const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
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