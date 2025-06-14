import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Loading";
import CommentCard from "./comments/CommentCard";
import NoCommentComponent from "./comments/NoCommentComponent";
import axiosInstance from "../../hooks/axiosInstance";

const Comments = ({ singleArticle, setArticleComments, articleComments }) => {;
  const { _id } = singleArticle;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosInstance(`/comments/${_id}`)
      .then((result) => {
        console.log("fetch result", result?.data);
        const comments = result?.data || [];
        console.log("set comments", comments);
        setArticleComments(comments);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [ _id, setArticleComments]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="mb-4 md:mb-8 lg:mb-10 bg-base-200 py-3 sm:py-4 px-2 md:px-6 shadow-2xl shadow-neutral-600 rounded-2xl">
          <h3 className="text-xl font-semibold text-center mb-3">
            Comments of this article: {articleComments?.length}
          </h3>


            {
                articleComments?.length>0?<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
            {articleComments.map((singleComment) => (
              <CommentCard
                key={singleComment._id}
                singleComment={singleComment}
              />
            ))}
          </div>:<NoCommentComponent/>
            }
          
        </section>
      )}
    </>
  );
};

export default Comments;
