import React from 'react';
import {easeInOut, motion} from 'motion/react';
import { NavLink } from 'react-router';

const NavCenterLinksButton = ({to, label}) => {
    return (
         <li>
        <NavLink to={to}>
          <motion.button
          animate={{rotateY:[0,2,0,-2,0]}} 
          whileHover={{ scale: 1.1, boxShadow: '0px 20px 50px'}}
            whileTap={{ scale: 0.95 }}
            transition={{duration:0.3, ease: easeInOut}}
          className="btn text-base-content bg-base-100 group mr-3">
            <span className="text-cyan-600 transition-colors duration-300">
              {label}
            </span>
          </motion.button>
        </NavLink>
      </li>
    );
};

export default NavCenterLinksButton;