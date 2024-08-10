import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import RegisterPage from '../pages/RegisterPage';
import ContactPage from '../pages/ContactPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage'; 
import NotificationPage from '../pages/NotificationPage'; 
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/CartPage';

export class AppRoute extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/productdetails" element={<ProductDetailsPage />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/favourite" element={<FavouritePage />} />
            <Route path="/cart" element={<CartPage />} />

        </Routes>
      </BrowserRouter>
    )
  }
}

export default AppRoute
