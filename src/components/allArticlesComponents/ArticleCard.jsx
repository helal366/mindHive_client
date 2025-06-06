import React from "react";
import { motion } from "motion/react";

const ArticleCard = ({ article }) => {
  const { title, thumbnail, publicationDate, authorName, content } = article;
  console.log(article);
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
        <h2 className="card-title">{title}</h2>

        <p>Author name: {authorName}</p>
        <p>Published on: {publicationDate}</p>
        <p>{content}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ArticleCard;
