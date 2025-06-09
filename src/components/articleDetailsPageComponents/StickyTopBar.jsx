import React from "react";
import { BiSolidCommentDetail, BiSolidLike } from "react-icons/bi";

const StickyTopBar = ({ singleArticle }) => {
  const { authorEmail, authorName, authorPhoto } = singleArticle;
  return (
    <>
      <div className="z-50 mb-2 sm:mb-4 md:mb-8 rounded-lg bg-base-300 py-3 sm:py-4 px-1 sm:px-2 md:px-6 flex flex-wrap items-center justify-between sticky top-0 border border-gray-200">
        <div className="flex gap-1 sm:gap-2 md:gap-4 flex-wrap items-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8  rounded-full p-1 ring-1 bg-white">
            <img
              className="w-full h-full object-cover rounded-full ring-1"
              src={authorPhoto}
              alt={authorName}
            />
          </div>
          <p className="text-sm font-light opacity-90 hidden sm:block">{authorName}</p>
          <p className="text-[10px] sm:text-xs font-light opacity-70 ">{authorEmail}</p>
        </div>
        <div className="flex gap-2 sm:gap-4 md:gap-8 items-center justify-end">
          <div className="relative">
            <div >
                <BiSolidLike
            className="cursor-pointer transition-transform duration-300 hover:scale-120 active:scale-90 text-neutral-600/60 p-1 border border-neutral-600 rounded-full"
            size={24}
          />
            </div>
          <span className="absolute -top-3 right-1 text-[9px] sm:text-[10px] md:text-xs text-neutral-600 z-10 font-bold">
            25
          </span>
          </div>
          <div className="relative">
            <div>
                <BiSolidCommentDetail
            className="cursor-pointer transition-transform duration-300 hover:scale-120 active:scale-90 text-neutral-600/60 p-1 border border-neutral-600 rounded-full"
            size={24}
          />
            </div>
          <span className="absolute -top-3 right-1 text-[9px] sm:text-[10px] md:text-xs text-neutral-600 z-10 font-bold">40</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyTopBar;
