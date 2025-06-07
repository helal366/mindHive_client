import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';

const ArticleDetailsPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    const singleArticle=useLoaderData();
    console.log(singleArticle)
    return (
        <div>
            article details
        </div>
    );
};

export default ArticleDetailsPage;