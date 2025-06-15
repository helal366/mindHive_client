import React, { useEffect } from "react";
import { easeInOut, motion } from "motion/react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const ArticleCard = ({ article }) => {
  useEffect(()=>{
    AOS.init();
  },[])
  const { title, thumbnail, publicationDate, authorName, content, _id } =
    article;

  const shortContent = (content, wordLimit) => {
    const wordsArray = content.split(" ");
    const sliceContent = wordsArray.slice(0, wordLimit).join(" ") + " ...";
    const shortList = wordsArray.length > wordLimit ? sliceContent : content;
    return shortList;
  };
  const result = shortContent(content, 30);
  // console.log(result);
  return (
    <motion.div
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-easing="linear"
      initial={{ x: 2, y: 0 }}
      animate={{
        x: [2, 2, 0, -2, -2, -2, 0, 2, 2],
        y: [0, 2, 2, 2, 0, -2, -2, -2, 0],
      }}
      whileHover={{ scale: [1.03, 1.0, 1.03] }}
      style={{ boxShadow: "0px 6px 12px rgba(255,255,255,0.8" }}
      transition={{ duration: 3, repeat: Infinity }}
      className="card bg-gray-200 text-success-content shadow-2xl border border-primary"
    >
      <figure>
        <motion.img
          whileHover={{ opacity: 0.6 }}
          className="h-60 w-full"
          src={thumbnail}
          alt={title}
        />
      </figure>
      <div className="card-body text-sm">
        <motion.h2
          initial={{ scale: 1.0 }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="card-title mb-1"
        >
          &nbsp; {title}
        </motion.h2>
        <div>
          <p>Author name: {authorName}</p>
          <p>Published on: {publicationDate}</p>
        </div>
        <p>{result}</p>
        <div className="card-actions justify-end gap-2">
          <Link to={`/article/${_id}`}>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 5px 10px",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="btn text-base-content bg-base-100 group text-sm"
            >
              <span className="group-hover:text-cyan-500 transition-colors duration-300 ">
                Read more
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
