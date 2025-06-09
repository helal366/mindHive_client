import React, { useEffect } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import StickyTopBar from "../components/articleDetailsPageComponents/StickyTopBar";
import ThumbnailPhoto from "../components/articleDetailsPageComponents/ThumbnailPhoto";
import ContentAndOthers from "../components/articleDetailsPageComponents/ContentAndOthers";

const ArticleDetailsPage = () => {
  const { id } = useParams();
  const [singleArticle, setSingleArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxios();
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axiosSecure
      .get(`/article/${id}`)
      .then((data) => {
        setSingleArticle(data?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [axiosSecure, id]);
  

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="py-2 sm:py-5 md:py-10 relative">
          {/* sticky top bar */}
          <StickyTopBar singleArticle={singleArticle} />
          {/* thumbnail */}
          <ThumbnailPhoto singleArticle={singleArticle} />
          {/* content and others */}
          <ContentAndOthers singleArticle={singleArticle}/>
         
        </section>
      )}
    </>
  );
};

export default ArticleDetailsPage;
