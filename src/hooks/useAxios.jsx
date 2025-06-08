
import React from "react";
import { useEffect } from "react";
import axiosInstance from "./axiosInstance";

const useAxios = () => {
  useEffect(() => {
    const requestInterceptor= axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error)=>Promise.reject(error)
);
    return ()=>{
    axiosInstance.interceptors.request.eject(requestInterceptor)
  }
  }, []);

  return axiosInstance;
};

export default useAxios;
