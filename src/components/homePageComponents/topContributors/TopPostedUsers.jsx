import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useAuth from "./../../../hooks/useAuth";
import TopPostedCard from "./TopPostedCard";
import Swal from "sweetalert2";

const TopPostedUsers = () => {
  const [topPostedUsers, setTopPostedUsers] = useState([]);

  const { baseURL } = useAuth();
  useEffect(() => {
    axios
      .get(`${baseURL}/top-posted-users`)
      .then((result) => {
        setTopPostedUsers(result?.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message || "Something went wrong",
          timer: 1500,
        });
      });
  }, [baseURL]);
  return (
    <section className="px-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">
        Top contributors (who posted maximum articles): {topPostedUsers.length}
      </h2>
      <div className="grid  lg:grid-cols-2 gap-6">
        {topPostedUsers.map((user, i) => (
          <TopPostedCard key={i} user={user} />
        ))}
      </div>
    </section>
  );
};

export default TopPostedUsers;
