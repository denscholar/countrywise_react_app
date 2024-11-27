import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/productPage/ProductPage';
import HomePage from './pages/homePage/HomePage';
import PricingPage from './pages/pricingPage/PricingPage';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import AppLayout from './pages/appLayout/AppLayout';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App