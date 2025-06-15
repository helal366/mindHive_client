import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Loading from "../components/Loading";
import StickyTopBar from "../components/articleDetailsPageComponents/StickyTopBar";
import ThumbnailPhoto from "../components/articleDetailsPageComponents/ThumbnailPhoto";
import ContentAndOthers from "../components/articleDetailsPageComponents/ContentAndOthers";
import Comments from "../components/articleDetailsPageComponents/Comments";
import axiosInstance from "../hooks/axiosInstance";
import Swal from "sweetalert2";

const ArticleDetailsPage = () => {
  const { id } = useParams();
  const [singleArticle, setSingleArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const [articleComments, setArticleComments] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axiosInstance
      .get(`/article/${id}`)
      .then((data) => {
        setSingleArticle(data?.data);
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
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="py-2 sm:py-5 md:py-10 relative">
          {/* sticky top bar */}
          <StickyTopBar
            singleArticle={singleArticle}
            articleComments={articleComments}
            setArticleComments={setArticleComments}
          />
          {/* thumbnail */}
          <ThumbnailPhoto singleArticle={singleArticle} />
          {/* content and others */}
          <ContentAndOthers singleArticle={singleArticle} />
          {/* comments */}
          <Comments
            singleArticle={singleArticle}
            articleComments={articleComments}
            setArticleComments={setArticleComments}
          />
        </section>
      )}
    </>
  );
};

export default ArticleDetailsPage;
