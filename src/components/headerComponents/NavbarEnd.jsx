import React from "react";
import { NavLink } from "react-router";
import NavbarDropdown from "./NavbarDropdown";
import useAuth from "../../hooks/useAuth";

const NavbarEnd = () => {
  const { user } = useAuth();
  return (
    <div className="navbar-end">
      {user ? (
        <>
          <NavbarDropdown />
        </>
      ) : (
        <>
          <NavLink to="/auth/login" className="btn">
            Login
          </NavLink>
          &nbsp;
          <NavLink to="/auth/register" className="btn">
            Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default NavbarEnd;
