import React from 'react';
import NavbarLinks from './NavbarLinks';
import { VscThreeBars } from 'react-icons/vsc';

const NavbarStart = () => {
    return (
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden">
            
            <VscThreeBars size={30}/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavbarLinks></NavbarLinks>
          </ul>
        </div>
        <span className="hidden lg:block text-xl font-semibold">
            <i>mindHive</i>
        </span> &nbsp; &nbsp;
        <input type="checkbox" value="dark" className="toggle theme-controller" />
      </div>
    );
};

export default NavbarStart;