import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import useAuth from './../../../hooks/useAuth';

const TopPostedUsers = () => {
    const [topPostedUsers, setTopPostedUsers]=useState([])
    const {baseURL}=useAuth()
    useEffect(()=>{
        axios.get(`${baseURL}/top-posted-users`)
        .then(result=>{
            console.log(result?.data);
            setTopPostedUsers(result?.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            Top contributors (who posted maximum articles): {topPostedUsers.length}
        </div>
    );
};

export default TopPostedUsers;