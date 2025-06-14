import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopPostedCard = ({ user }) => {
  useEffect(()=>{
      AOS.init();
    },[])
  const authorEmail = user?._id?.authorEmail;
  const authorName = user?._id?.authorName;
  const authorPhoto = user?._id?.authorPhoto;
  const articleData = user?.articleData;

  return (
    <section className="mb-4 md:mb-8 rounded-lg bg-gray-200 py-4 px-2 md:px-6 border border-gray-200 shadow-md shadow-neutral-600">
      <div className="flex gap-1 sm:gap-2 md:gap-4 flex-wrap items-center mb-5">
        <div className="w-6 h-6 sm:w-8 sm:h-8  rounded-full p-1 ring-1 bg-white">
          <img
            className="w-full h-full object-cover rounded-full ring-1"
            src={authorPhoto}
            alt={authorName}
          />
        </div>
        <div>
          <p className="text-sm font-light opacity-90 ">{authorName}</p>
          <p className="text-[10px] sm:text-xs font-light opacity-70 ">
            {authorEmail}
          </p>
        </div>
      </div>
      <div>
        {articleData.map((article, i) => {
          const { title, category, publicationDate } = article;
          return (
            <div
              key={i}
              data-aos="fade-up-left"
              data-aos-duration="1500"
              data-aos-easing="linear"
              className="bg-gray-100 rounded-lg p-2 mb-2"
            >
              <p className="mb-1">{i + 1}.</p>
              <h3 className="text-lg font-semibold mb-1">
                Atricle Title: {title}{" "}
              </h3>
              <p>Article Category: {category} </p>
              <p>Published on: {publicationDate} </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopPostedCard;
