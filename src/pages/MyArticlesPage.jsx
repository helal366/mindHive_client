import React, { useEffect } from 'react';

const MyArticlesPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <div>
            my articles here
        </div>
    );
};

export default MyArticlesPage;