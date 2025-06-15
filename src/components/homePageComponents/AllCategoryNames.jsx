import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import useAuth from './../../hooks/useAuth';
import { FaTag } from "react-icons/fa";
import { motion } from "motion/react"
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllCategoryNames = () => {
    const {baseURL}=useAuth()
    const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
     AOS.init();
    setLoading(true);
    axios
      .get(`${baseURL}/categories`)
      .then((result) => {
        // console.log(result);
        setCategories(result?.data);
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          title: "Oops!",
          icon: "error",
          text: err.message||"Something went wrong."
        })
        setLoading(false);
      });
  }, [baseURL]);
  const distinctCategories=categories?.map(cat=>cat._id);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-8">
          <h3 className="text-center text-2xl font-semibold mb-6">Article Categories: {distinctCategories.length} </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
            {
              distinctCategories.map((category, i)=><motion.button
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-easing="linear"
              onClick={()=>navigate(`category-articles/${category}`)} 
              whileHover={{scale:1.05, boxShadow: '0px 10px 20px white'}}
              className="btn text-lg mb-5 bg-gray-300 border border-purple-800 cursor-pointer group "
              key={i}>  
              <span className="flex items-center gap-5 text-gray-600 group-hover:text-cyan-500 transition-colors duration-300">
                <FaTag fill="teal"/>
                {category}
              </span>
              </motion.button>)
            }
          </div>
        </div>
      )}
    </>
  );
};

export default AllCategoryNames;
