import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import MyArticlesTable from "../components/myArticlesComponents/myArticleTable/MyArticlesTable";
import NoArticle from "../components/myArticlesComponents/myArticleTable/NoArticle";
// import axiosInstance from "../hooks/axiosInstance";

const MyArticlesPage = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [search, setSearch] = useState("");
  const [myArticles, setMyArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxios();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axiosSecure(`/my-articles/${userEmail}`)
      .then((data) => {
        setMyArticles(data?.data);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userEmail, axiosSecure]);

  // after deletion, delete from ui
  const handleDeletedUI=(deletedID)=>{
    const newMyArticles=myArticles.filter(article=>article._id!==deletedID);
    setMyArticles(()=>newMyArticles)
  }

  // filter for search bar
  const filteredArticles = search
    ? myArticles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      )
    : myArticles;
if(!filteredArticles.length>0){
  return <NoArticle/>
}
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="pb-16">
          
          <div className="flex flex-col-reverse sm:flex-row justify-between">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by title"
              className="input input-bordered w-auto my-2 sm:my-10 bg-base-200"
            />
            <h2 className="text-base sm:text-xl md:text-3xl text-center font-semibold my-4 sm:my-6 md:my-8 lg:my-10">
              My Articles: {filteredArticles.length}
            </h2>
          </div>

          <MyArticlesTable filteredArticles={filteredArticles} handleDeletedUI={handleDeletedUI}/>
        </div>
      )}
    </>
  );
};

export default MyArticlesPage;
