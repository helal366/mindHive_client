import React from "react";
import { motion } from "motion/react"

const HomePage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen my-10 rounded-lg shadow-2xl py-10">
      <div className="grid grid-cols-1 md:grid-cols-[48%_48%] gap-[2%] px-[1%]">
        <div className="flex flex-col justify-center ml-5">
          <h1 className="text-5xl font-bold">Empower Minds, Share Knowledge!</h1>
          <p className="py-6">
            A place where every student has the opportunity to teach and learn. Whether you’re writing an article or engaging in a discussion, your voice matters. Empower yourself and others through shared knowledge.
          </p>
          
          <button className="btn btn-primary w-1/2">Get Started</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ml-5 md::ml-0">
          <motion.div 
          initial={{scale: 0.9, opacity:0.6}}
          animate={{scale:[0.9,1.0,0.9], opacity: [0.6,1.0,0.6]}}
          transition={{duration:9, repeat:Infinity}}
          className="max-w-sm bg-[url('https://i.postimg.cc/85ycNvXz/diet.png')] bg-center bg-cover shadow-2xl   min-h-40 rounded-l-xl border-5">
            
          </motion.div>
          <motion.div 
          initial={{scale: 0.9, opacity:0.6}}
          animate={{scale:[0.9,1.0,0.9], opacity: [0.6,1.0,0.6]}}
          transition={{duration:9, repeat:Infinity}}
          className="max-w-sm bg-[url('https://i.postimg.cc/1R0NM79S/finance.png')] bg-center bg-cover shadow-2xl rounded-r-xl min-h-40  border-5">
          </motion.div>
          <motion.div 
          initial={{scale: 0.9, opacity:0.6}}
          animate={{scale:[0.9,1.0,0.9], opacity: [0.6,1.0,0.6]}}
          transition={{duration:9, repeat:Infinity}}
          className="max-w-sm bg-[url('https://i.postimg.cc/GhvYHV1y/politics.png')] bg-center bg-cover shadow-2xl rounded-tr-xl min-h-40 border-5 ">
          </motion.div>
          <motion.div 
           initial={{scale: 0.9, opacity:0.6}}
          animate={{scale:[0.9,1.0,0.89], opacity: [0.6,1.0,0.6]}}
          transition={{duration:9, repeat:Infinity}}
          className="max-w-sm bg-[url('https://i.postimg.cc/Px9hQ40w/gardening.png')] bg-center bg-cover shadow-2xl rounded-tl-xl min-h-40 border-5">
          </motion.div>
          <motion.div 
          initial={{scale: 0.9, opacity:0.6}}
          animate={{scale:[0.9,1.0,0.9], opacity: [0.6,1.0,0.6]}}
          transition={{duration:9, repeat:Infinity}}
          className="max-w-sm bg-[url('https://i.postimg.cc/C5sxw2vV/travel.png')] bg-center bg-cover shadow-2xl rounded-br-xl min-h-40 border-5">
          </motion.div>
          <motion.div 
           initial={{scale: 0.9, opacity:0.6}}
          animate={{scale:[0.9,1.0,0.9], opacity: [0.6,1.0,0.6]}}
          transition={{duration:9, repeat:Infinity}}
          className="max-w-sm bg-[url('https://i.postimg.cc/KvnfFYcX/sports.jpg')] bg-center bg-cover shadow-2xl rounded-bl-xl min-h-40 border-5">
          </motion.div>
           
          
          
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
