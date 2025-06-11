import React from 'react';
import article from './article.json'
import Lottie from 'lottie-react';

const ErrorArticle = () => {
    return (
        <div className='w-120 h-80'>
            <Lottie animationData={article} loop={true}></Lottie>
        </div>
    );
};

export default ErrorArticle;