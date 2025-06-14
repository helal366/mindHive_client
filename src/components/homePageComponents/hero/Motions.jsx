import React from "react";
import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const images = [
  "https://i.postimg.cc/85ycNvXz/diet.png",
  "https://i.postimg.cc/1R0NM79S/finance.png",
  "https://i.postimg.cc/PxXp8mJR/gardening3.png",
  "https://i.postimg.cc/Px9hQ40w/gardening.png",
  "https://i.postimg.cc/C5sxw2vV/travel.png",
  "https://i.postimg.cc/VLskyWbv/travel-santorini.png",
  "https://i.postimg.cc/cHsF8VsJ/ai.png",
  "https://i.postimg.cc/PqLwVy2M/wellness.png",
];
const Motions = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up-left"
      data-aos-duration="1500"
      data-aos-easing="linear"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-5 md:ml-0"
    >
      {images.map((imgUrl, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.96, opacity: 0.8 }}
          animate={{ scale: [0.96, 1.0, 0.96], opacity: [0.8, 1.0, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ backgroundImage: `url(${imgUrl})` }}
          className={`max-w-sm bg-center bg-cover shadow-2xl min-h-40 border-3 border-neutral-500 rounded-md ${i>=4?'hidden md:block':''} `}
        ></motion.div>
      ))}
    </div>
  );
};

export default Motions;
