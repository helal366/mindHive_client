import React from 'react';
import NavbarLinks from './NavbarLinks';

const NavbarCenter = () => {
    return (
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         <NavbarLinks></NavbarLinks>
        </ul>
      </div>
    );
};

export default NavbarCenter;