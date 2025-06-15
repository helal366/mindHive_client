import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import Loading from "../components/Loading";
import ArticleCard from "../components/allArticlesComponents/ArticleCard";
import Swal from "sweetalert2";
const CategoryArticlesPage = () => {
  const { category } = useParams();
  const { baseURL } = useAuth();
  const [loading, setLoading] = useState(false);
  const [categeryArticles, setCategoryArticles] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/category-articles/${category}`)
      .then((result) => {
        setCategoryArticles(result?.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message || "Something went wrong",
          timer: 1500,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [baseURL, category]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="px-6 py-10">
          <h3 className="text-center text-2xl font-semibold mb-4">
            Articles in "{category}" : ({categeryArticles.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categeryArticles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryArticlesPage;
