import React from "react";
import { NavLink } from "react-router";

const NavbarLinks = () => {
  return (
    <>
      <li>
        <NavLink to='/'>
         <button className="btn text-base-content bg-base-100">
          Home
        </button>
        </NavLink>
      </li>&nbsp;
      <li>
        <NavLink to='/all-articles'>
        <button className="btn text-base-content bg-base-100">
          All Articles
        </button>
        </NavLink>
      </li>&nbsp;
      <li>
        <NavLink to='/my-articles'>
         <button className="btn text-base-content bg-base-100">
          My Articles
        </button>
        </NavLink>
      </li>&nbsp;
      <li>
        <NavLink to='/post-article'>
         <button className="btn text-base-content bg-base-100">
          Post Articles
        </button>
        </NavLink>
      </li>&nbsp;
      <li>
        <NavLink to='/about-us'>
         <button className="btn text-base-content bg-base-100">
         About us
        </button>
        </NavLink>
      </li>

     

    </>
  );
};

export default NavbarLinks;
