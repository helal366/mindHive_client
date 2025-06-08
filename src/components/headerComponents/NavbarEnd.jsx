import React from "react";
import { NavLink } from "react-router";
import NavbarDropdown from "./NavbarDropdown";
import useAuth from "../../hooks/useAuth";
import { easeInOut, motion } from "motion/react";

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
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/auth/login">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    rotateX: 10,
                    rotateY: 10,
                    boxShadow: "0px 20px 50px",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  className="btn text-base-content bg-base-100 group"
                >
                  <span className="group-hover:text-cyan-500 transition-colors duration-300">
                    Login
                  </span>
                </motion.button>
              </NavLink>
            </li>
            &nbsp;
            <li>
              <NavLink to="/auth/register">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    rotateX: 10,
                    rotateY: 10,
                    boxShadow: "0px 20px 50px",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: easeInOut }}
                  className="btn text-base-content bg-base-100 group"
                >
                  <span className="group-hover:text-cyan-500 transition-colors duration-300">
                    Register
                  </span>
                </motion.button>
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default NavbarEnd;
