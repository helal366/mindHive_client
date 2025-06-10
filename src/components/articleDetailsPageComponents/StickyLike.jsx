import React from 'react';
import { BiSolidLike } from 'react-icons/bi';

const StickyLike = ({handleLike, likedUserEmails, userEmail, likeCount}) => {
    return (
        <div className="relative">
                      <button
                        className="cursor-pointer transition-transform duration-300 hover:scale-120 active:scale-90 text-neutral-600/60 p-1 border border-neutral-600 rounded-full"
                        onClick={handleLike}
                      >
                        <BiSolidLike
                          fill={`${likedUserEmails?.includes(userEmail) ? "red" : ""}`}
                          size={20}
                        />
                      </button>
                      <span className="absolute -top-3 right-1 text-[9px] sm:text-[10px] md:text-xs text-neutral-600 z-10 font-bold">
                        {likeCount}
                      </span>
                    </div>
    );
};

export default StickyLike;