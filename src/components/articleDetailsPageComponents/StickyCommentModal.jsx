import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import CommentModalScroll from "./stickyCommentModal/CommentModalScroll";
import CommentModalTop from "./stickyCommentModal/CommentModalTop";
import axiosInstance from "../../hooks/axiosInstance";

const StickyCommentModal = ({
  singleArticle,
  likeCount,
  articleComments,
  setArticleComments,
}) => {
  const { user } = useAuth();
  const { authorName, content, _id, title } = singleArticle;

  const shortContent = (content, wordLimit) => {
    if (!content || typeof content !== "string") {
      return "";
    }
    const wordsArray = content?.split(" ");
    const sliceContent = wordsArray.slice(0, wordLimit).join(" ") + ".....";
    const wordsList = wordsArray.length > wordLimit ? sliceContent : content;
    return wordsList;
  };
  const result = shortContent(content, 40);

  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const commentInfo = {
      comment,
      articleID: _id,
      articleTitle: title,
      commenter: user?.displayName,
      commenterEmail: user?.email,
      commenterPhoto: user?.photoURL,
    };

    axiosInstance
      .post("/comment", commentInfo)
      .then((result) => {
        if (result?.data?.acknowledged) {
          const comment = result?.data;
          const newArticleComments = [...articleComments, comment];
          setArticleComments(newArticleComments);
          Swal.fire({
            title: "Comment successful.",
            icon: "success",
            timer: 2000,
            draggable: true,
          });
          form.reset();
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message || "Something went wrong",
          timer: 1500,
        });
      });
  };
  return (
    <section>
      <div className="modal-box max-w-2xl relative py-1 sm:py-2 md:py-3 lg:py-4 overflow-hidden">
        {/* top sticky */}
        <CommentModalTop authorName={authorName} />

        {/* middle scroll div */}
        <CommentModalScroll
          likeCount={likeCount}
          result={result}
          singleArticle={singleArticle}
          articleComments={articleComments}
        />

        {/* bottom sticky */}
        <div className="sticky -bottom-4 py-2 z-20 bg-base-300 rounded-xl">
          <div className=" mt-1">
            <form onSubmit={handleComment} method="dialog">
              <fieldset className="fieldset border-base-300 rounded-box w-full border px-4 py-1">
                <input
                  name="comment"
                  type="text"
                  className="input w-full"
                  placeholder={`Comment as ${user?.displayName}`}
                  required
                />
              </fieldset>
              <div className="flex justify-end my-3">
                <button
                  type="submit"
                  className="bg-base-100 px-3 py-1 rounded-lg text-[10px] cursor-pointer mr-4"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyCommentModal;
