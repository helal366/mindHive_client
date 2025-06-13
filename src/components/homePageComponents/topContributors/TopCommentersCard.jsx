import React from "react";

const TopCommentersCard = ({ singleCommenter }) => {
  const { _id, comments } = singleCommenter;
  console.log("id...", _id);
  console.log("comments...", comments);
  const { commenter, commenterEmail, commenterPhoto } = _id;
  return (
    <section className="mb-4 md:mb-8 rounded-lg bg-gray-200 py-4 px-2 md:px-6 border border-gray-200 shadow-md shadow-neutral-600">
      <div className="flex gap-1 sm:gap-2 md:gap-4 flex-wrap items-center mb-5">
        <div className="w-6 h-6 sm:w-8 sm:h-8  rounded-full p-1 ring-1 bg-white">
          <img
            className="w-full h-full object-cover rounded-full ring-1"
            src={commenterPhoto}
            alt={commenter}
          />
        </div>
        <div>
          <p className="text-sm font-light opacity-90 ">{commenter}</p>
          <p className="text-[10px] sm:text-xs font-light opacity-70 ">
            {commenterEmail}
          </p>
        </div>
      </div>

      <div>
        {comments.map((singleComment,i)=>{
            console.log(singleComment)
            const {articleTitle, comment}=singleComment
          return  <div key={i}
        className="bg-gray-100 rounded-lg p-2 mb-2">
            <p className="mb-1">{i+1}.</p>
            <h3 className="text-lg font-semibold mb-1">Article Title: {articleTitle} </h3>
            {/* <p>Article Category: {articleCategory} </p> */}
            <p><strong>Comment:</strong> "{comment}"</p>
        </div>})}
      </div>
    </section>
  );
};

export default TopCommentersCard;
