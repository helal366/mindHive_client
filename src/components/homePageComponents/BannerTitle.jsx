import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const BannerTitle = () => {
    return (
        <div className="flex flex-col justify-center ml-5">
          <motion.h1 
          animate={{x: [0,20,0]}}
          transition={{duration: 4, repeat: Infinity}}
          className="text-3xl sm:text-4xl font-bold my-6">
            Empower Minds, Share Knowledge!
          </motion.h1>
          <p className="text-sm sm:text-base py-6">
            A place where every student has the opportunity to teach and learn.
            Whether you’re writing an article or engaging in a discussion, your
            voice matters. Empower yourself and others through shared knowledge.
          </p>

          <Link to="/all-articles">
            <motion.button 
          whileHover={{ scale: 1.1,rotateX:10, rotateY: 10, boxShadow: '0px 20px 50px'}}
            whileTap={{ scale: 0.95 }}
          className="btn btn-neutral text-base-content bg-base-100 group">
            <span className="group-hover: text-cyan-500 transition-colors duration-300">
              All Articles
            </span>
          </motion.button>
          </Link>
        </div>
    );
};

export default BannerTitle;