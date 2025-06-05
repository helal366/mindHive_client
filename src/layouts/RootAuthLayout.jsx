import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/headerComponents/Navbar';

const RootAuthLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default RootAuthLayout;