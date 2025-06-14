import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CommentCard = ({ singleComment }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { commenterPhoto, commenter, commenterEmail, comment } = singleComment;
  console.log(singleComment);
  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-easing="linear"
      className="bg-gray-100 border border-teal-600 rounded-lg p-1 text-gray-400"
    >
      {/* commenter profile */}
      <div className="flex gap-5 justify-start items-center mb-6">
        <img
          className="w-10 h-10 p-1 border border-teal-600 rounded-full"
          src={commenterPhoto}
          alt={commenter}
        />
        <div className="flex flex-col justify-center items-start text-xs ">
          <p>{commenter}</p>
          <p>{commenterEmail}</p>
        </div>
      </div>

      {/* comment */}
      <div className="flex flex-col items-start">
        <span className="text-4xl">
          <RiDoubleQuotesL size={20} />
        </span>
        <span>{comment}</span>
        <span className="text-4xl">
          <RiDoubleQuotesR size={20} />{" "}
        </span>
      </div>
    </section>
  );
};

export default CommentCard;
