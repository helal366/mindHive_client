import axios from 'axios';
import React from 'react';

const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL
})
const useAxios = () => {
    const token=localStorage.getItem('token');
    axiosInstance.interceptors.request.use(config=>{
        config.headers.Authorization=`Bearer ${token}`
        return config
    })
    return axiosInstance
};

export default useAxios;