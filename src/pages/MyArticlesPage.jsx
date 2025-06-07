import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import ArticleCard from "../components/allArticlesComponents/ArticleCard";

const MyArticlesPage = () => {
  const { user, baseURL } = useAuth();
  const userEmail = user?.email;
  const [search, setSearch] = useState("");
  const [myArticles, setMyArticles] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios(`${baseURL}/my-articles/${userEmail}`)
      .then((data) => {
        setMyArticles(data?.data);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  }, [baseURL, userEmail]);
  const filteredArticles = search
    ? myArticles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      )
    : myArticles;

  return (
    <div className="pb-16">
      <div className="flex justify-between">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search by title"
          className="input input-bordered w-auto  my-10"
        />
        <h2 className="text-3xl text-center font-semibold my-10">
          My Articles: {myArticles.length}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {filteredArticles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default MyArticlesPage;
