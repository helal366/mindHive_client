import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { Tooltip } from "react-tooltip";


const StickyLike = ({ handleLike, likedUserEmails, userEmail, likeCount }) => {
  return (
    <div className="relative">
      <button
        data-tooltip-id="like"
        className="shadow-lg shadow-neutral-500 cursor-pointer transition-transform duration-300 hover:scale-120 active:scale-90 text-neutral-600/60 p-1 border border-neutral-600 rounded-full"
        onClick={handleLike}
      >
        <BiSolidLike
          fill={`${likedUserEmails?.includes(userEmail) ? "red" : "gray"}`}
          size={20}
        />
      </button>
      <Tooltip id="like" content="Click here to like this article" />
      <span className="absolute -top-3 right-1 text-[9px] sm:text-[10px] md:text-xs text-gray-500 z-10 font-bold">
        {likeCount}
      </span>
    </div>
  );
};

export default StickyLike;
