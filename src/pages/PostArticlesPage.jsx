import React, { useEffect } from "react";
// import axios from 'axios';
import ArticleFieldsets from "../components/postArticleComponents/ArticleFieldsets";
import Heading from "../components/postArticleComponents/Heading";
import SubmitButton from "../components/postArticleComponents/SubmitButton";
import { toast } from "react-toastify";
import AuthorFieldset from "../components/postArticleComponents/AuthorFieldset";
import { useState } from "react";
import Loading from "../components/Loading";
import axiosInstance from "../hooks/axiosInstance";
// import axiosInstance from "../hooks/axiosInstance";

const PostArticlesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(false);
  const handlePostArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const articleData = Object.fromEntries(formData.entries());
    const { tags, ...restArticleData } = articleData;
    const tagsArray = tags.split(",").map((e) => e.trim());
    const newArticleData = { ...restArticleData, tags: tagsArray };
    console.log(newArticleData, tagsArray);
    setLoading(true);
    axiosInstance
      .post(`/post-article`, newArticleData)
      .then((result) => {
        if (result?.data?.acknowledged) {
          toast.success("Your article posted successfully");
          form.reset()
        }
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <section className="py-10">
        <div className="card bg-base-200 w-full max-w-4xl mx-auto py-5 shrink-0 shadow-2xl border border-neutral-600">
          <div className="card-body">
            {loading ? (
              <Loading />
            ) : (
              <form onSubmit={handlePostArticle}>
                <Heading />
                <ArticleFieldsets />
                <AuthorFieldset />
                <SubmitButton loading={loading}/>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostArticlesPage;
