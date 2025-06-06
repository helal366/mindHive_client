import React from "react";

import ArticleFieldsets from "../components/postArticleComponents/ArticleFieldsets";
import PublisherFieldset from "../components/postArticleComponents/PublisherFieldset";
import Heading from "../components/postArticleComponents/Heading";
import SubmitButton from "../components/postArticleComponents/SubmitButton";

const PostArticlesPage = () => {
  const handlePostArticle=e=>{
    e.preventDefault();
    const form=e.target;
    const formData=new FormData(form);
    const articleData=Object.fromEntries(formData.entries());
    const {tags, ...restArtisleData}=articleData
    const tagsArray=tags.split(',').map(e=>e.trim());
    const newArticleData={...restArtisleData, tags:tagsArray}
    console.log(newArticleData, tagsArray);
    

  }
  return (
    <>
      <section className="py-10">
        <div className="card bg-base-200 w-full max-w-xl mx-auto py-5 shrink-0 shadow-2xl border border-neutral-600">
          <div className="card-body">
            <form onSubmit={handlePostArticle}>
              <Heading/>
              <ArticleFieldsets />
              <PublisherFieldset />
              <SubmitButton/>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostArticlesPage;
