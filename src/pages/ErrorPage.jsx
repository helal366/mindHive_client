import React, { useEffect } from 'react';

const ErrorPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <div>
            error page
        </div>
    );
};

export default ErrorPage;