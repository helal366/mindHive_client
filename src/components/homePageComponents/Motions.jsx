import React from 'react';
import { motion } from "motion/react"

const Motions = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-5 md::ml-0">
                  <motion.div 
                  initial={{scale: 0.9, opacity:0.6}}
                  animate={{scale:[0.9,1.0,0.9], opacity: [0.8,1.0,0.8]}}
                  transition={{duration:9, repeat:Infinity}}
                  className="max-w-sm bg-[url('https://i.postimg.cc/85ycNvXz/diet.png')] bg-center bg-cover shadow-2xl   min-h-40 rounded-l-xl border-5 border-neutral-500">
                    
                  </motion.div>
                  <motion.div 
                  initial={{scale: 0.9, opacity:0.6}}
                  animate={{scale:[0.9,1.0,0.9], opacity: [0.8,1.0,0.8]}}
                  transition={{duration:9, repeat:Infinity}}
                  className="max-w-sm bg-[url('https://i.postimg.cc/1R0NM79S/finance.png')] bg-center bg-cover shadow-2xl rounded-r-xl min-h-40  border-5 border-neutral-500">
                  </motion.div>
                  <motion.div 
                  initial={{scale: 0.9, opacity:0.6}}
                  animate={{scale:[0.9,1.0,0.9], opacity: [0.8,1.0,0.8]}}
                  transition={{duration:9, repeat:Infinity}}
                  className="max-w-sm bg-[url('https://i.postimg.cc/GhvYHV1y/politics.png')] bg-center bg-cover shadow-2xl rounded-tr-xl rounded-tl-xl min-h-40 border-5 border-neutral-500 ">
                  </motion.div>
                  <motion.div 
                   initial={{scale: 0.9, opacity:0.6}}
                  animate={{scale:[0.9,1.0,0.89], opacity: [0.8,1.0,0.8]}}
                  transition={{duration:9, repeat:Infinity}}
                  className="max-w-sm bg-[url('https://i.postimg.cc/Px9hQ40w/gardening.png')] bg-center bg-cover shadow-2xl rounded-tl-xl rounded-tr-xl min-h-40 border-5 border-neutral-500">
                  </motion.div>
                  <motion.div 
                  initial={{scale: 0.9, opacity:0.6}}
                  animate={{scale:[0.9,1.0,0.9], opacity: [0.8,1.0,0.8]}}
                  transition={{duration:9, repeat:Infinity}}
                  className="max-w-sm bg-[url('https://i.postimg.cc/C5sxw2vV/travel.png')] bg-center bg-cover shadow-2xl rounded-br-xl min-h-40 border-5 border-neutral-500">
                  </motion.div>
                  <motion.div 
                   initial={{scale: 0.9, opacity:0.6}}
                  animate={{scale:[0.9,1.0,0.9], opacity: [0.8,1.0,0.8]}}
                  transition={{duration:9, repeat:Infinity}}
                  className="max-w-sm bg-[url('https://i.postimg.cc/KvnfFYcX/sports.jpg')] bg-center bg-cover shadow-2xl rounded-bl-xl min-h-40 border-5 border-neutral-500">
                  </motion.div>
                  <motion.div 
                   initial={{scale: 0.9, opacity:0.6}}
                  animate={{scale:[0.9,1.0,0.9], opacity: [0.8,1.0,0.8]}}
                  transition={{duration:9, repeat:Infinity}}
                  className="max-w-sm bg-[url('https://i.postimg.cc/cHsF8VsJ/ai.png')] bg-center bg-cover shadow-2xl rounded-bl-xl min-h-40 border-5 border-neutral-500">
                  </motion.div>
                  <motion.div 
                   initial={{scale: 0.9, opacity:0.6}}
                  animate={{scale:[0.9,1.0,0.9], opacity: [0.8,1.0,0.8]}}
                  transition={{duration:9, repeat:Infinity}}
                  className="max-w-sm bg-[url('https://i.postimg.cc/PqLwVy2M/wellness.png')] bg-center bg-cover shadow-2xl rounded-bl-xl min-h-40 border-5 border-neutral-500">
                  </motion.div>
                   
                  
                  
                  
                </div>
    );
};

export default Motions;