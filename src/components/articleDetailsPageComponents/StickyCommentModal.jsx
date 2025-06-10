import React from "react";
import useAuth from "../../hooks/useAuth";

const StickyCommentModal = ({ singleArticle }) => {
    const {user}=useAuth()
  const { thumbnail, title, authorPhoto, authorName } = singleArticle;
  return (
    <section className="modal-box 2xl:w-1/2 xl:w-3/5 lg:w-3/4 md:w-4/5 sm:w-11/12 max-w-5xl relative py-1 sm:py-2 md:py-3 lg:py-4 overflow-hidden">
      <div className="sticky top-0 p-2">
            <h3 className="font-bold text-lg mb-2">{title} </h3>
      </div>
        <div>
            <img className="w-8 h-8 rounded-full" src={authorPhoto} alt="" />
            <p>{authorName}</p>
        </div>
        
        <img className="rounded-lg lg:w-1/2 md:w-3/4 sm:w-4/5 mx-auto h-[30vh] " src={thumbnail} alt={title} />
        <p className="py-4">Click the button below to close</p>

        <fieldset className="fieldset border-base-300 rounded-box w-full border p-4 ">
          <legend className="fieldset-legend">Comment here!</legend>
          <input type="text" className="input w-full" placeholder={`Comment as ${user?.displayName}`} />
        </fieldset>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Save</button>
          </form>
        </div>
    </section>
  );
};

export default StickyCommentModal;
