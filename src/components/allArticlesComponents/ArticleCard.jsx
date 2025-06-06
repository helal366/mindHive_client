import React from "react";
import { easeInOut, motion } from "motion/react";

const ArticleCard = ({ article }) => {
  const { title, thumbnail, publicationDate, authorName, content } = article;
  
    const shortContent=(content, wordLimit)=>{
        const wordsArray=content.split(' ');
        const sliceContent=wordsArray.slice(0, wordLimit).join(' ')+' .....'
        const shortList=wordsArray.length>wordLimit?sliceContent:content
        return shortList;
    }
    const result=shortContent(content, 30);
    console.log(result)
  return (
    <motion.div
    whileHover={{scale: 1.08}}
      style={{ boxShadow: "0px 10px 20px rgba(0,255,255,0.8" }}
      className="card bg-success text-success-content shadow-2xl border border-primary"
    >
      <figure>
        <img className="h-80 w-full" src={thumbnail} alt={title} />
      </figure>
      <div className="card-body">
        <motion.h2 
        initial={{x:10, scale:1.0}}
        animate={{x:[10,20,10], scale:[1, 1.1,1]}}
        transition={{duration:9, repeat: Infinity}}
        className="card-title mb-5">{title}</motion.h2>

        <p>Author name: {authorName}</p>
        <p>Published on: {publicationDate}</p>
        <p>{result}</p>
        <div className="card-actions justify-end">
          <motion.button 
          whileHover={{ scale: 1.1,rotateX:2, rotateY: 2, boxShadow: '0px 5px 10px'}}
            whileTap={{ scale: 0.95 }}
            transition={{duration:0.3, ease: easeInOut}}
          className="btn text-base-content bg-base-100 group">
            <span className="group-hover: text-cyan-500 transition-colors duration-300">
              Read more
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
