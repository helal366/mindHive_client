import React from 'react';
import Lottie from 'lottie-react';
import signupOne from './signupOne.json'
const SignUpOne = () => {
    return (
        <div className='w-120 h-120'>
            <Lottie animationData={signupOne} loop={true}></Lottie>
        </div>
    );
};

export default SignUpOne;