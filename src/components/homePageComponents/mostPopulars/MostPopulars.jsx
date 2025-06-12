import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Loading from "../../Loading";
import PopularCard from './PopularCard';

const MostPopulars = () => {
   const { baseURL } = useAuth();
  const [loading, setLoading] = useState(false);
  const [populars, setPopulars]=useState([])

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/populars`)
      .then((result) => {
        // console.log(result);
        setPopulars(result?.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [baseURL]);
  return <>{loading ? <Loading /> : <section className='px-6' >
    <h2 className='text-3xl font-semibold mb-8'>Most Popular articles: {populars.length}</h2>

    <div className='grid grid-cols-3 gap-8'>
        {
            populars.map((article, index)=><PopularCard 
            index={index}
            article={article}
            key={article._id}/>)
        }
    </div>
    </section>}</>;
};
export default MostPopulars;