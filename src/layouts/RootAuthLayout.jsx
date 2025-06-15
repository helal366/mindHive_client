import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/headerComponents/Navbar';

const RootAuthLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default RootAuthLayout;