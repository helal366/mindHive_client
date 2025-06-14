import React from "react";
import { easeInOut, motion } from "motion/react";
import { Link } from "react-router";

const PopularCard = ({ article, index }) => {
  const { title, thumbnail, publicationDate, authorName, content, _id } =
    article;
  const shortContent = (content, wordLimit) => {
    const wordsArray = content.split(" ");
    const sliceContent = wordsArray.slice(0, wordLimit).join(" ") + " ...";
    const shortList = wordsArray.length > wordLimit ? sliceContent : content;
    return shortList;
  };
  const result = shortContent(content, 20);
  const flexColClass=index%2===0?"md:flex-col" : "md:flex-col-reverse"
  return (
    <>
      <motion.div
        initial={{ x: 2, y: 0 }}
        animate={{
          x: [2, 2, 0, -2, -2, -2, 0, 2, 2],
          y: [0, 2, 2, 2, 0, -2, -2, -2, 0],
        }}
        whileHover={{ scale: [1.05, 1.0, 1.05] }}
        style={{ boxShadow: "0px 6px 12px rgba(255,255,255,0.8)" }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`card bg-gray-200 text-success-content shadow-2xl border border-primary flex-col  gap-12`}
      >
        <figure>
          <motion.img
            whileHover={{ opacity: 0.6 }}
            className="h-60 w-full"
            src={thumbnail}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <motion.h2
            initial={{ scale: 1.0 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="card-title mb-5"
          >
            &nbsp; {title}
          </motion.h2>
          <div>
            <p>Author name: <b>{authorName}</b> </p>
            <p>Published on: <b>{publicationDate}</b> </p>
          </div>
          <p>{result}</p>
          <div className="card-actions justify-end">
            <Link to={`/article/${_id}`}>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotateX: 2,
                  rotateY: 2,
                  boxShadow: "0px 5px 10px",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="btn text-base-content bg-base-100 group"
              >
                <span className="group-hover:text-cyan-500 transition-colors duration-300">
                  Read more
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PopularCard;
