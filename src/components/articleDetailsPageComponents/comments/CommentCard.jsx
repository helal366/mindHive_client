import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const CommentCard = ({ singleComment }) => {
  const { commenterPhoto, commenter, commenterEmail, comment } = singleComment;
  console.log(singleComment);
  return (
    <section className="bg-gray-100 border border-teal-600 rounded-lg p-1 text-gray-400">
      <div className="flex gap-5 justify-start items-center mb-6">
        <img className="w-10 h-10 p-1 border border-teal-600 rounded-full" src={commenterPhoto} alt={commenter} />
        <div className="flex flex-col justify-center items-start text-xs">
          <p>{commenter}</p>
          <p>{commenterEmail}</p>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-4xl"><RiDoubleQuotesL size={20}/></span>
        <span>
            {comment}
        </span>
        <span className="text-4xl"><RiDoubleQuotesR size={20}/> </span>
      </div>
    </section>
  );
};

export default CommentCard;
