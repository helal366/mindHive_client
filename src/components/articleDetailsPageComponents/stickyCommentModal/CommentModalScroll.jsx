import React from 'react';
import { BiSolidCommentDetail, BiSolidLike } from 'react-icons/bi';

const CommentModalScroll = ({singleArticle, likeCount, result}) => {
    const {thumbnail, title, authorPhoto, authorName}=singleArticle
    return (
        <div className="overflow-y-auto max-h-[65vh] mt-1 ">
                  {/* profile pic and profile name */}
                  <div className="flex justify-start mb-2">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={authorPhoto}
                      alt={authorName}
                    />
                    &nbsp;
                    <p>{authorName} </p>
                  </div>
                  {/* divider */}
                  <div className="border-b-2 border-dashed border-neutral-500 mb-3"></div>
                  {/* like and comments */}
                  <div className="flex justify-between">
                    <div className="flex justify-start">
                      <span>
                        <BiSolidLike size={20} fill="gray" />{" "}
                      </span>
                      &nbsp;
                      <span className="text-sm">{likeCount} </span>
                    </div>
                    <div className="flex justify-end">
                      <span>
                        <BiSolidCommentDetail size={20} fill="gray" />{" "}
                      </span>
                      &nbsp;
                      <span className="text-sm">40 </span>
                    </div>
                  </div>
                  {/* divider */}
                  <div className="border-b-2 border-dashed border-neutral-500 mb-3"></div>
                  <h3 className="font-bold text-lg mb-2">{title} </h3>
        
                  <p className="text-justify text-sm mb-2">{result}</p>
                  <img
                    className="rounded-lg w-full mx-auto  mb-2"
                    src={thumbnail}
                    alt={title}
                  />
                </div>
    );
};

export default CommentModalScroll;