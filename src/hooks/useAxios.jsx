import axios from "axios";
import React from "react";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
const useAxios = () => {
  useEffect(() => {
    const requestInterceptor= axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    return ()=>{
    axiosInstance.interceptors.request.eject(requestInterceptor)
  }
  }, []);

  return axiosInstance;
};

export default useAxios;
