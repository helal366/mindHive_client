import React from "react";
import { BiSolidCommentDetail, BiSolidLike } from "react-icons/bi";

const CommentModalScroll = ({
  singleArticle,
  likeCount,
  result,
  articleComments,
}) => {
  const { thumbnail, title, authorPhoto, authorName } = singleArticle;
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

      {/*number of likes and comments */}
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
          <span className="text-sm">{articleComments.length}</span>
        </div>
      </div>

      {/* divider */}
      <div className="border-b-2 border-dashed border-neutral-500 mb-3"></div>
      {/* title */}
      <h3 className="font-bold text-lg mb-2">{title} </h3>

      {/* content */}
      <p className="text-justify text-sm mb-2">{result}</p>
      {/* image */}
      <img
        className="rounded-lg w-full mx-auto  mb-2"
        src={thumbnail}
        alt={title}
      />

      {/* comments */}
      <div className="border border-teal-600 p-1 mb-7">
        {articleComments.map((comment) => (
          <div key={comment._id}>
            {/* profile */}
            <div className="flex gap-5 justify-start items-center mb-3 text-gray-400">
              <img
                className="w-10 h-10 p-1 border border-teal-600 rounded-full"
                src={comment?.commenterPhoto}
                alt={comment?.commenter}
              />
              <div className="flex flex-col justify-center items-start text-xs">
                <p>{comment?.commenter}</p>
                <p>{comment?.commenterEmail}</p>
              </div>
            </div>

            {/* comment */}
            <div className="text-gray-500">
              {comment?.comment}
              </div>
              {/* divider */}
              <div className="border border-double border-gray-400 my-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentModalScroll;
