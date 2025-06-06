import React from "react";
import { motion } from "motion/react";

const Heading = () => {
  return (
    <>
      <motion.h2
        initial={{ scale: 1.0, x: 10 }}
        animate={{ scale: [1.05, 0.95, 1.05], x: [-10, 0, 10, 0, -10] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="text-center text-2xl font-bold mb-5"
      >
        Please Post Your Article Here!
      </motion.h2>
    </>
  );
};

export default Heading;
