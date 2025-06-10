import React from "react";
import useAuth from "../../hooks/useAuth";

const StickyCommentModal = ({ singleArticle }) => {
  const { user } = useAuth();
  const { thumbnail, title, authorPhoto, authorName, content } = singleArticle;
  
  const shortContent=(content, wordLimit)=>{
    if(!content || typeof content !== 'string'){
        return "";
    }
    const wordsArray=content?.split(' ');
    const sliceContent=wordsArray.slice(0,wordLimit).join(' ')+".....";
    const wordsList=wordsArray.length>wordLimit?sliceContent:content
    return wordsList
  }
  const result=shortContent(content,100);
  console.log(result)
  return (
    <section>
      <div className="modal-box max-w-lg relative py-1 sm:py-2 md:py-3 lg:py-4 overflow-hidden">
        {/* top sticky */}
        <div className="sticky top-0 p-2 bg-base-300 rounded-xl mb-1">
          <div className="flex justify-between">
            <img className="w-8 h-8 rounded-full" src={authorPhoto} alt="" />
            <p>{authorName}'s article</p>
          </div>
        </div>
        {/* middle scroll div */}
        <div className="overflow-y-auto max-h-[80vh] mt-1 ">
          <h3 className="font-bold text-lg mb-2">{title} </h3>

          <img
            className="rounded-lg w-full mx-auto  mb-1"
            src={thumbnail}
            alt={title}
          />
          <div>
            <span></span>
          </div>
          <p className="text-justify text-sm">
            {result}
          </p>
        </div>

        {/* bottom sticky */}
        <div className="sticky -bottom-4 py-2 z-20 bg-base-300 rounded-xl">
          <fieldset className="fieldset border-base-300 rounded-box w-full border px-4 py-1">
            <input
              type="text"
              className="input w-full"
              placeholder={`Comment as ${user?.displayName}`}
            />
          </fieldset>
          <div className="modal-action mt-1">
            <form method="dialog ">
              <button className="bg-base-100 px-3 py-1 rounded-lg text-[10px] cursor-pointer mr-4">
                Save
              </button>
            </form>
          </div>
          <form method="dialog">
                <button className="bg-base-100 px-3 py-1 rounded-lg text-[10px] cursor-pointer absolute left-4 bottom-2">
                  Cancel
                </button>
              </form>
        </div>
      </div>
    </section>
  );
};

export default StickyCommentModal;
