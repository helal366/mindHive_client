import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/headerComponents/Navbar';
import Footer from '../components/foooterComponents/Footer';

const RootHomeLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootHomeLayout;