import React from 'react';
import { NavLink } from 'react-router';

const NavCenterLinksButton = ({ to, label }) => {
  return (
    <li className='text-base-content bg-base-100 font-semibold rounded-full'>
      <NavLink to={to}>
          <span className=" transition-colors duration-300">
            {label}
          </span>
      </NavLink>
    </li>
  );
};

export default NavCenterLinksButton;