import React, { useEffect } from "react";
import ErrorArticle from "../lotties/errorArticle/ErrorArticle";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <Helmet>
      <title>mindHive | Error Page</title>
    </Helmet>
      <div className="my-8 w-120 h-90">
        <ErrorArticle />
      </div>
      <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-center text-red-600">
        404
      </h1>
      <h1 className="lg:text-5xl md:text-3xl sm:text-xl text-center text-red-600 mb-8">
        No Page Found
      </h1>
      <Link to='/'>
      <button className="btn btn-success">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
