/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Testimony from '../Components/Testimony/Testimony';

const HomeLayout = () => {
    return (
        <>
            <Banner />
            <Outlet />
            <Testimony />
            <Footer />
        </>
    );
};

export default HomeLayout;
