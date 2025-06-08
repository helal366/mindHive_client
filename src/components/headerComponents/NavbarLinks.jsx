import React from "react";
import { NavLink } from "react-router";
import {easeInOut, motion} from 'motion/react';

const NavbarLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/">
          <motion.button
          animate={{rotateY:[0,2,0,-2,0]}} 
          whileHover={{ scale: 1.1,rotateX:10, rotateY: 10, boxShadow: '0px 20px 50px'}}
            whileTap={{ scale: 0.95 }}
            transition={{duration:0.3, ease: easeInOut}}
          className="btn text-base-content bg-base-100 group">
            <span className="group-hover:text-cyan-500 transition-colors duration-300">
              Home
            </span>
          </motion.button>
        </NavLink>
      </li>
      &nbsp;
      <li>
        <NavLink to="/all-articles">
          <motion.button 
          whileHover={{ scale: 1.1,rotateX:10, rotateY: 10, boxShadow: '0px 20px 50px'}}
            whileTap={{ scale: 0.95 }}
            transition={{duration:0.3, ease: easeInOut}}
          className="btn text-base-content bg-base-100 group">
            <span className="group-hover:text-cyan-500 transition-colors duration-300">
               All Articles
            </span>
          </motion.button>
        </NavLink>
      </li>
      &nbsp;
      <li>
        <NavLink to="/my-articles">
          <motion.button 
          whileHover={{ scale: 1.1,rotateX:10, rotateY: 10, boxShadow: '0px 20px 50px'}}
            whileTap={{ scale: 0.95 }}
            transition={{duration:0.3, ease: easeInOut}}
          className="btn text-base-content bg-base-100 group">
            <span className="group-hover: text-cyan-500 transition-colors duration-300">
              My Articles
            </span>
          </motion.button>
        </NavLink>
      </li>
      &nbsp;
      <li>
        <NavLink to="/post-article">
          <motion.button 
          whileHover={{ scale: 1.1,rotateX:10, rotateY: 10, boxShadow: '0px 20px 50px'}}
            whileTap={{ scale: 0.95 }}
            transition={{duration:0.3, ease: easeInOut}}
          className="btn text-base-content bg-base-100 group">
            <span className="group-hover: text-cyan-500 transition-colors duration-300">
              Post Articles
            </span>
          </motion.button>
        </NavLink>
      </li>
      &nbsp;
      <li>
        <NavLink to="/about-us">
          <motion.button 
          whileHover={{ scale: 1.1,rotateX:10, rotateY: 10, boxShadow: '0px 20px 50px'}}
            whileTap={{ scale: 0.95 }}
            transition={{duration:0.3, ease: easeInOut}}
          className="btn text-base-content bg-base-100 group">
            <span className="group-hover: text-cyan-500 transition-colors duration-300">
              About us
            </span>
          </motion.button>
        </NavLink>
      </li>
    </>
  );
};

export default NavbarLinks;
