/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import Home from './Home/Home'
import Men from './Pages/Men/Men'
import Women from './Pages/Women/Women';
import NewArrival from './Pages/NewArrival/NewArrival'
import Contact from './Pages/Contact/Contact'
import Cart from './Pages/Cart/Cart';
import Footer from './Footer/Footer';
import Login from './Pages/Account/Login/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women/>} />
            <Route path="/new-arrivals" element={<NewArrival />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/login' element={<Login/>}/>
            {/* Add Footer to other routes if needed */}
            <Route path="*" element={<Footer />} />
        </Routes>
    );
};

export default AppRoutes;
