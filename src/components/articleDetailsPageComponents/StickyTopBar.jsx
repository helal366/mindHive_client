import React from "react";
import { useState } from "react";
import { BiSolidCommentDetail, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import Swal from "sweetalert2";
import useAuth from "./../../hooks/useAuth";
import useAxios from "./../../hooks/useAxios";
import Loading from "./../Loading";

const StickyTopBar = ({ singleArticle }) => {
  const axiosSucure = useAxios();
  const { user } = useAuth();
  const userEmail = user?.email;
  const [loading, setLoading] = useState(false);
  const { authorEmail, authorName, authorPhoto, _id, likes, likedUsers } =
    singleArticle;
  const [likeCount, setLikeCount] = useState(
    likedUsers?.length>0 ? likedUsers.length : 0
  );
  const [likedUserEmails, setLikedUserEmails] = useState(
    likedUsers?.length>0 ? likedUsers : []
  );
  
  // handleLike function
  const handleLike = () => {
    if(!Array.isArray(likedUserEmails)){
      setLikedUserEmails([]);
      return
    }
    const emailExist = likedUserEmails?.includes(userEmail);
    
    let updatedLikes
    let updatedUserEmails=[...likedUserEmails]
    if (emailExist) {
      updatedLikes = likeCount - 1;
      updatedUserEmails = likedUserEmails?.filter(
        (user) => user !== userEmail
      );      
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
        setLikeCount(emailExist?updatedLikes+1:updatedLikes-1);
        setLikedUserEmails(emailExist?[...updatedUserEmails,userEmail]:updatedUserEmails.filter(email=>email!==userEmail))
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
        <div className="z-20 mb-2 sm:mb-4 md:mb-8 rounded-lg bg-base-300 py-3 sm:py-4 px-1 sm:px-2 md:px-6 flex flex-wrap items-center justify-between sticky top-0 border border-gray-200">
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
            <div className="relative">
              <button
                className="cursor-pointer transition-transform duration-300 hover:scale-120 active:scale-90 text-neutral-600/60 p-1 border border-neutral-600 rounded-full"
                onClick={handleLike}
              >
                <BiSolidLike fill={`${likedUserEmails?.includes(userEmail)?'red':''}`} size={20} />
                
              </button>
              <span className="absolute -top-3 right-1 text-[9px] sm:text-[10px] md:text-xs text-neutral-600 z-10 font-bold">
                {likeCount}
              </span>
            </div>
            <div className="relative">
              <button className="cursor-pointer transition-transform duration-300 hover:scale-120 active:scale-90 text-neutral-600/60 p-1 border border-neutral-600 rounded-full">
                <BiSolidCommentDetail size={20} />
              </button>
              <span className="absolute -top-3 right-1 text-[9px] sm:text-[10px] md:text-xs text-neutral-600 z-10 font-bold">
                40
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyTopBar;
