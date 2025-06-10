import React from 'react';

const CommentModalTop = ({authorName}) => {
    return (
        <div className="sticky top-0 p-2 border-b-2 border-dashed border-neutral-500 mb-3">
          <h2 className="font-bold text-xl text-center">
            {authorName}'s article
          </h2>
          <form method="dialog">
            <button className="bg-base-300 px-3 py-1 rounded-lg text-[10px] cursor-pointer absolute right-4 top-2">
              Cancel
            </button>
          </form>
        </div>
    );
};

export default CommentModalTop;