import React from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react"

const BannerTitle = () => {
    return (
        <div className="flex flex-col justify-center ml-5">
          <motion.h1 
          animate={{x: [0,10,0]}}
          transition={{duration: 5, repeat: Infinity}}
          className="text-3xl sm:text-5xl font-bold my-6">
            Empower Minds, Share Knowledge!
          </motion.h1>
          <p className="text-sm sm:text-base py-6">
            A place where every student has the opportunity to teach and learn.
            Whether you’re writing an article or engaging in a discussion, your
            voice matters. Empower yourself and others through shared knowledge.
          </p>

          <Link to="/all-articles">
            <button className="btn btn-neutral">All Articles</button>
          </Link>
        </div>
    );
};

export default BannerTitle;