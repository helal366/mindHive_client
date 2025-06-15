import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import TopCommentersCard from "./TopCommentersCard";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const TopCommentedUsers = () => {
  const [topCommenters, setTopCommenters] = useState([]);
  const { baseURL } = useAuth();
  useEffect(() => {
    axios
      .get(`${baseURL}/most-commenters`)
      .then((result) => {
        setTopCommenters(result?.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message || "Something went wrong",
          timer: 1500,
        });
      });
  }, []);
  return (
    <section className="px-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">
        Top commenters (who comments maximum): {topCommenters.length}
      </h2>
      <div className="grid  lg:grid-cols-2 gap-6">
        {topCommenters.map((commenter, i) => (
          <TopCommentersCard key={i} singleCommenter={commenter} />
        ))}
      </div>
    </section>
  );
};

export default TopCommentedUsers;
