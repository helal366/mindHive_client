import React from "react";
import { useState } from "react";
import {
  BiSolidCommentDetail,

} from "react-icons/bi";
import Swal from "sweetalert2";
import useAuth from "./../../hooks/useAuth";
import useAxios from "./../../hooks/useAxios";
import Loading from "./../Loading";
import StickyCommentModal from "./StickyCommentModal";
import StickyLike from "./StickyLike";
import { Tooltip } from "react-tooltip";

const StickyTopBar = ({ singleArticle, articleComments, setArticleComments }) => {
  const axiosSucure = useAxios();
  const { user } = useAuth();
  const userEmail = user?.email;
  const [loading, setLoading] = useState(false);
  const { authorEmail, authorName, authorPhoto, _id, likedUsers } =
    singleArticle;
  const [likeCount, setLikeCount] = useState(
    likedUsers?.length > 0 ? likedUsers.length : 0
  );
  const [likedUserEmails, setLikedUserEmails] = useState(
    likedUsers?.length > 0 ? likedUsers : []
  );

  // handleLike function
  const handleLike = () => {
    if (!Array.isArray(likedUserEmails)) {
      setLikedUserEmails([]);
      return;
    }
    const emailExist = likedUserEmails?.includes(userEmail);

    let updatedLikes;
    let updatedUserEmails = [...likedUserEmails];
    if (emailExist) {
      updatedLikes = likeCount - 1;
      updatedUserEmails = likedUserEmails?.filter((user) => user !== userEmail);
    } else {
      updatedLikes = likeCount + 1;
      updatedUserEmails = [...likedUserEmails, userEmail];
    }
    const updatedDoc = {
      likes: parseInt(updatedLikes),
      likedUsers: updatedUserEmails,
    };
    setLikeCount(updatedLikes);
    setLikedUserEmails(updatedUserEmails);
    setLoading(true);
    axiosSucure
      .patch(`/article-like/${_id}`, updatedDoc)
      .then((result) => {
        console.log(result?.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Failed to update",
          text: err.message,
          timer: 2000,
        });
        setLikeCount(emailExist ? updatedLikes + 1 : updatedLikes - 1);
        setLikedUserEmails(
          emailExist
            ? [...updatedUserEmails, userEmail]
            : updatedUserEmails.filter((email) => email !== userEmail)
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="z-20 mb-2 sm:mb-4 md:mb-8 rounded-lg bg-base-200 py-3 sm:py-4 px-1 sm:px-2 md:px-6 flex flex-wrap items-center justify-between sticky top-0 border border-gray-200 shadow-md shadow-neutral-600">
          <div className="flex gap-1 sm:gap-2 md:gap-4 flex-wrap items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8  rounded-full p-1 ring-1 bg-white">
              <img
                className="w-full h-full object-cover rounded-full ring-1"
                src={authorPhoto}
                alt={authorName}
              />
            </div>
            <p className="text-sm font-light opacity-90 hidden sm:block">
              {authorName}
            </p>
            <p className="text-[10px] sm:text-xs font-light opacity-70 ">
              {authorEmail}
            </p>
          </div>
          <div className="flex gap-2 sm:gap-4 md:gap-8 items-center justify-end">
            <StickyLike 
            likeCount={likeCount}
            userEmail={userEmail}
            likedUserEmails={likedUserEmails}
            handleLike={handleLike}/>
            <div className="relative">
              <button 
              onClick={() => document.getElementById(`${_id}`).showModal()}
              data-tooltip-id="comment"
              className="cursor-pointer transition-transform duration-300 hover:scale-120 active:scale-90 text-neutral-600/60 p-1 border border-neutral-600 rounded-full shadow-lg shadow-neutral-500">
                <BiSolidCommentDetail fill={'gray'} size={20} />
              </button>
              <Tooltip id="comment" content="Click here to comment"/>
              <span 
              className="absolute -top-3 right-1 text-[9px] sm:text-[10px] md:text-xs text-gray-500 z-10 font-bold">
                {articleComments?articleComments?.length:0}
              </span>
            </div>
          </div>

          {/* comment modal */}
          <dialog id={`${_id}`} className="modal">
            <StickyCommentModal 
            likeCount={likeCount}
            singleArticle={singleArticle}
            articleComments={articleComments}
            setArticleComments={setArticleComments}/>
            
          </dialog>
        </div>
      )}
    </>
  );
};

export default StickyTopBar;
