import React, { useEffect, useState } from "react";
// import ArticleCard from "../components/allArticlesComponents/ArticleCard";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "./../components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import PopularCard from './../components/homePageComponents/mostPopulars/PopularCard';

const AllArticlesPage = () => {
  const { baseURL } = useAuth();
  const [allArticles, setAllArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    setLoading(true);
    axios(`${baseURL}/articles?searchParams=${search}`)
      .then((data) => {
        const articles = data?.data || [];
        setAllArticles(articles);
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [baseURL, search]);

  return (
    <>
      <Helmet>
        <title>mindHive | All Articles</title>
      </Helmet>
      <div className="pb-16">
        <div className="flex justify-between">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by title"
            className="input input-bordered w-24 md:w-auto  my-10 bg-base-200"
          />
          <h2 className="text-3xl text-center font-semibold my-10">
            Total Articles: {allArticles.length}
          </h2>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="linear"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"
          >
            {allArticles.map((article) => (
              <PopularCard key={article._id} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllArticlesPage;
