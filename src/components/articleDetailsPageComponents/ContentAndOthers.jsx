import React from 'react';
import { format } from "date-fns";

const ContentAndOthers = ({singleArticle}) => {
    const {title, content, category, tags, publicationDate}=singleArticle;
    const publishDate =publicationDate? format(new Date(publicationDate), "do MMM yyyy"):'Unknown';
    return (
        <>
             <div className="mb-4 md:mb-8 lg:mb-10 bg-base-300 py-3 sm:py-4 px-2 md:px-6 shadow-2xl shadow-neutral-600 rounded-2xl">
            <p className="font-semibold md:text-2xl sm:text-xl text-lg opacity-90 mb-2 sm:mb-4 md:mb-6 bg-base-100 px-2 lg:mx-20 md:mx-12 sm:mx-4 py-2 sm:py-3 rounded-xl">
              {title}
            </p>
            <p className="font-medium text-base sm:text-lg md:text-xl mb-1 md:mb-2 opacity-80 lg:mx-20 md:mx-12 sm:mx-4 inline-block bg-base-100 p-2 rounded-md">
              <span>Article Category: </span>
              {category}
            </p>
            <p className="opacity-60 text-xs sm:text-sm md:text-base text-justify mb-2 sm:mb-4 lg:px-20 md:px-12 sm:px-4">
              {content}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:px-20 md:px-12 sm:px-4">
              <p className="opacity-60 text-xs mb-2 inline-block bg-base-100 p-1 rounded-sm">
                <span>Published on: </span>
                <span>{publishDate}</span>
              </p>
              <div>
                {
                    tags?.map((tag,i)=><span key={i} className="badge badge-secondary mr-2 text-[10px]">{tag}</span>)
                }
                
              </div>
            </div>
          </div>
        </>
    );
};

export default ContentAndOthers;