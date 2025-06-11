import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import CommentModalScroll from "./stickyCommentModal/CommentModalScroll";
import CommentModalTop from "./stickyCommentModal/CommentModalTop";
import useAxios from "./../../hooks/useAxios";

const StickyCommentModal = ({ singleArticle, likeCount }) => {
  const { user } = useAuth();
  const { authorName, content, _id } = singleArticle;
  const axiosSecure = useAxios();

  const shortContent = (content, wordLimit) => {
    if (!content || typeof content !== "string") {
      return "";
    }
    const wordsArray = content?.split(" ");
    const sliceContent = wordsArray.slice(0, wordLimit).join(" ") + ".....";
    const wordsList = wordsArray.length > wordLimit ? sliceContent : content;
    return wordsList;
  };
  const result = shortContent(content, 400);

  const handleComment = (e) => {
    e.preventDefault;
    const form = e.target;
    const comment = form.comment.value;
    console.log(user);
    const commentInfo = {
      comment,
      articleID: _id,
      commenter: user?.displayName,
      commenterEmail: user?.email,
      commenterPhoto:user?.photoURL
    };

    axiosSecure
      .post("/comment", commentInfo)
      .then((result) => {
        console.log(result?.data);
        if (result?.data?.acknowledged) {
          Swal.fire({
            title: "Comment seccessful.",
            icon: "success",
            timer: 2000,
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(user.displayName, user.email, _id, authorName, authorEmail);
  return (
    <section>
      <div className="modal-box max-w-xl relative py-1 sm:py-2 md:py-3 lg:py-4 overflow-hidden">
        {/* top sticky */}
        <CommentModalTop authorName={authorName} />

        {/* middle scroll div */}
        <CommentModalScroll
          likeCount={likeCount}
          result={result}
          singleArticle={singleArticle}
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
          {/* <form method="dialog">
            <button className="bg-base-100 px-3 py-1 rounded-lg text-[10px] cursor-pointer absolute left-5 bottom-5">
              Cancel
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default StickyCommentModal;
