import React, { useEffect } from 'react';
import {useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ArticleDetailsPage = () => {
    const {id}=useParams()
    const [singleArticle, setSingleArticle]=useState('');
    const [loading, setLoading]=useState(true);
    const axiosSecure=useAxios()
    useEffect(()=>{
        setLoading(true)
        window.scrollTo(0,0);

        axiosSecure.get(`/article/${id}`)
        .then(data=>{
            setSingleArticle(data?.data)
        }).catch(err=>{
            console.log(err);
            toast.error(err.message)
        }).finally(()=>{
            setLoading(false)
        })
      },[axiosSecure, id])
    console.log(singleArticle, loading)
    return (
        <div>
            article details
        </div>
    );
};

export default ArticleDetailsPage;