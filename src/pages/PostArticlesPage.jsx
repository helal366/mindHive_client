import React from "react";
import axios from 'axios';
import ArticleFieldsets from "../components/postArticleComponents/ArticleFieldsets";
import Heading from "../components/postArticleComponents/Heading";
import SubmitButton from "../components/postArticleComponents/SubmitButton";
import { toast } from 'react-toastify';
import AuthorFieldset from "../components/postArticleComponents/AuthorFieldset";

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
    axios.post(`${import.meta.env.VITE_API_URL}/post-article`,newArticleData)
    .then(result=>{
      // console.log(result);
      if(result?.data?.acknowledged){
        toast.success('Your article posted successfully')
      }
    }).catch(err=>{
      toast.error(err.message)
    })

  }
  return (
    <>
      <section className="py-10">
        <div className="card bg-base-200 w-full max-w-xl mx-auto py-5 shrink-0 shadow-2xl border border-neutral-600">
          <div className="card-body">
            <form onSubmit={handlePostArticle}>
              <Heading/>
              <ArticleFieldsets />
              <AuthorFieldset/>
              <SubmitButton/>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostArticlesPage;
