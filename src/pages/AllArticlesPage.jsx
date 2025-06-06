import React from "react";
import { useLoaderData } from "react-router";
import ArticleCard from "../components/allArticlesComponents/ArticleCard";

const AllArticlesPage = () => {
  const data = useLoaderData();
  const allArticles = data?.data;
  return (
    <div className="pb-16">
      <h2 className="text-3xl text-center font-semibold my-10">
        Total Articles: {allArticles.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {allArticles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default AllArticlesPage;
