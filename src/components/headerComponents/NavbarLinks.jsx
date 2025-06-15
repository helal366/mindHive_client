import React from "react";
import { NavLink, useNavigate } from "react-router";
import { easeInOut, motion } from "motion/react";
import { useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import NavCenterLinksButton from "./NavCenterLinksButton";
import { FaChevronDown } from "react-icons/fa";

const NavbarLinks = () => {
  const navigate = useNavigate();
  const { baseURL } = useAuth();
  const [categories, setCategories] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  useEffect(() => {
    axios
      .get(`${baseURL}/categories`)
      .then((result) => {
        setCategories(result?.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "Oops!",
          icon: "error",
          text: err.message || "Something went wrong.",
        });
      });
  }, [baseURL]);
  const distinctCategories = categories?.map((cat) => cat._id);

  return (
    <>
      <NavCenterLinksButton to="/" label="Home" />

      <li className=" group relative">
        <div className="flex items-center mr-1">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 20px 50px",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            onClick={() => {
              setOpenDropdown(false)
              navigate("/all-articles")}}
            className="btn text-base-content bg-base-100 group relative"
          >
            <span className="text-cyan-600">All Articles</span>
          </motion.button>
          <button 
          className="cursor-pointer"
          onClick={()=>setOpenDropdown(!openDropdown)}>
            <FaChevronDown className={` transition-transform duration-300 ${openDropdown?'rotate-180':''}`} />
          </button>
        </div>
        {/* dropdown */}
        {
          openDropdown && <ul className={`absolute bg-[#f1f4f7] shadow-xl z-50 mt-12 transition-all transform duration-400 ease-in-out rounded-xl min-w-52 p-5  ${openDropdown?'opacity-100 translate-0':'opacity-0 -translate-y-10'}`}>
          {distinctCategories.map((category, i) => (
            <li
              key={i}
              className="px-4 py-2 text-gray-900 bg-gray-300 hover:bg-gray-200 hover:font-semibold border-b border-teal-600 cursor-pointer rounded-xl mb-1"
              // onClick={()=>navigate(`all-articles?category=${(category)}`)}
              onClick={() => navigate(`category-articles/${category}`)}
            >
              {category}
            </li>
          ))}
        </ul>
        }
        
      </li>
      <NavCenterLinksButton to="/my-articles" label="My Articles" />
      <NavCenterLinksButton to="/post-article" label="Post Articles" />
      <NavCenterLinksButton to="/about-us" label="About us" />
    </>
  );
};

export default NavbarLinks;
