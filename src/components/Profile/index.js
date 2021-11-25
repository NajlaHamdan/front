import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
const BASE_URL = "http://localhost:4000";
const Profile = () => {
    const [userInfo,setUserInfo]=useState([]);
    useEffect(() => {
        profile();
    }, [])
    const profile=async()=> {
        let id = localStorage.getItem('users')
        const result=await axios.post(`${BASE_URL}/profile`,{id});
        console.log(result.data);
        setUserInfo(result.data)
      }
    console.log(userInfo);
    return (
        <div>
            
        </div>
    )
}

export default Profile
