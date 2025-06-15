import React from "react";
import axios from "axios";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Loading from "../../Loading";
import PopularCard from "./PopularCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const MostPopulars = () => {
  const { baseURL } = useAuth();
  const [loading, setLoading] = useState(false);
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    AOS.init();
    setLoading(true);
    axios
      .get(`${baseURL}/populars`)
      .then((result) => {
        setPopulars(result?.data);
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
  }, [baseURL]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="px-6">
          <h2 className="text-3xl font-semibold mb-8">
            Most Popular articles: {populars.length}
          </h2>

          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="linear"
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {populars.map((article, index) => (
              <PopularCard index={index} article={article} key={article._id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default MostPopulars;
