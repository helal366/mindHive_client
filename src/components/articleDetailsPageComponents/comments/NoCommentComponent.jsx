import React from 'react';
import NoComments from '../../../lotties/noComment/NoComments';

const NoCommentComponent = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <NoComments/>
            <div className='text-3xl font-semibold text-center text-red-600'>No Comment here!</div>
        </div>
    );
};

export default NoCommentComponent;