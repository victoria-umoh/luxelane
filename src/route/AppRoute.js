import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage'; 
import NotificationPage from '../pages/NotificationPage'; 
import FavouritePage from '../pages/FavouritePage';

export class AppRoute extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/login" element={<UserLoginPage />} />
            <Route exact path="/purchase" element={<PurchasePage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/privacy" element={<PrivacyPage />} />
            <Route exact path="/refund" element={<RefundPage />} />
            <Route exact path="/productdetails" element={<ProductDetailsPage />} />
            <Route exact path="/notification" element={<NotificationPage />} />
            <Route exact path="/favourite" element={<FavouritePage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default AppRoute
