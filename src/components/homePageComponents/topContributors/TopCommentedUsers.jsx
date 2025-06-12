import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import useAuth from './../../../hooks/useAuth';

const TopCommentedUsers = () => {
    const [topCommenters, setTopCommenters]=useState([])
    const {baseURL}=useAuth()
    useEffect(()=>{
        axios.get(`${baseURL}/most-commenters`)
        .then(result=>{
            console.log(result?.data);
            setTopCommenters(result?.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            Top commenters (who comments maximum): {topCommenters.length}
        </div>
    );
};

export default TopCommentedUsers;






