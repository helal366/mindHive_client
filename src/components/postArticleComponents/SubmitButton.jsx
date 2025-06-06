import React from "react";
import {motion} from 'motion/react';

const SubmitButton = () => {
  return (
    <>
      <div className="flex justify-center">
        <motion.button 
        whileHover={{scale:1.1}}
        whileTap={{scale:0.95}}
        type="submit" className="btn btn-neutral mt-4 relative shadow-2xl group px-8">
          Submit
          <span className="spanOne"></span>
          <span className="spanTwo "></span>
        </motion.button>
      </div>
    </>
  );
};

export default SubmitButton;
