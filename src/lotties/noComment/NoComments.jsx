import React from 'react';
import Lottie from 'lottie-react';
import noComment from './no-comment.json'

const NoComments = () => {
    return (
        <div className='w-120 h-120'>
            <Lottie animationData={noComment} loop={true}></Lottie>
        </div>
    );
};

export default NoComments;