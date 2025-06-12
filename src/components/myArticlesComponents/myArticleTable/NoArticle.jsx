import React from 'react';
import NoComments from '../../../lotties/noComment/NoComments';

const NoArticle = () => {
    return (
         <div className='flex flex-col justify-center items-center py-10'>
            <div className='text-3xl font-semibold text-center text-red-600 '>No Article Found Posted By You!</div>
            <NoComments/>
        </div>
    );
};

export default NoArticle;