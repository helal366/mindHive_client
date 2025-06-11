import React from 'react';

const ThumbnailPhoto = ({singleArticle}) => {
    const {thumbnail, title}=singleArticle
    return (
        <>
            <div className="w-full max-h-[85%] shadow-2xl shadow-neutral-600 rounded-2xl px-[2vw] md:px-[5vw] lg:px-[10vw] py-[2vh] sm:py-[5vh] md:py-[6vh] bg-base-200 mb-4 md:mb-8 lg:mb-10">
            <div className="rounded-2xl shadow-2xl shadow-neutral-300">
              <img
                className="w-full max-h-[500px] rounded-2xl object-cover border border-teal-600 p-1 bg-white"
                src={thumbnail}
                alt={title}
              />
            </div>
          </div>
        </>
    );
};

export default ThumbnailPhoto;