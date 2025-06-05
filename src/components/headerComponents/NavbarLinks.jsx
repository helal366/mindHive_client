import React from "react";
import { NavLink } from "react-router";

const NavbarLinks = () => {
  return (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>&nbsp;
      <li>
        <NavLink to='/all-articles'>All Articles</NavLink>
      </li>&nbsp;
      <li>
        <NavLink to='/my-articles'>My Articles</NavLink>
      </li>&nbsp;
      <li>
        <NavLink to='/post-article'>Post Articles</NavLink>
      </li>&nbsp;
      <li>
        <NavLink to='/about-us'>About us</NavLink>
      </li>

     

    </>
  );
};

export default NavbarLinks;
