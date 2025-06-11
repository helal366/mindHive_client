import React, { useEffect, useState } from "react";
import ArticleCard from "../components/allArticlesComponents/ArticleCard";
import useAuth from "../hooks/useAuth";
import axios  from 'axios';
import { toast } from "react-toastify";
import Loading from './../components/Loading';

const AllArticlesPage = () => {
  const {baseURL}=useAuth();
  const [allArticles, setAllArticles]=useState([]);
  const [search, setSearch]=useState('');
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
      window.scrollTo(0,0);
      setLoading(true)
      axios(`${baseURL}/articles?searchParams=${search}`)
      .then(data=>{
        const articles=data?.data || [];
        setAllArticles(articles)
      }).catch(err=>{
        toast.error(err.message)
      }).finally(()=>{
        setLoading(false)
      })
    },[baseURL,search])  
  return (
    <>    
    {
      loading? <Loading/> : <div className="pb-16">
      <div className="flex justify-between">
        <input
        onChange={e=>setSearch(e.target.value)}
          type="text"
          placeholder="Search by title"
          className="input input-bordered w-24 md:w-auto  my-10 bg-base-200"
        />
        <h2 className="text-3xl text-center font-semibold my-10">
          Total Articles: {allArticles.length}
        </h2>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {allArticles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
    }
    </>
   
  );
};

export default AllArticlesPage;
