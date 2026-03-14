import React from 'react';
import NavbarLinks from './NavbarLinks';

const NavbarCenter = () => {
    return (
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-2">
         <NavbarLinks></NavbarLinks>
        </ul>
      </div>
    );
};

export default NavbarCenter;