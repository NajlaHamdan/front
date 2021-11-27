import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav";
import './style.css';
const BASE_URL = "http://localhost:4000";
const Profile = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    profile();
  }, []);
  const profile =  () => {
    let id = JSON.parse(localStorage.getItem("users"));
    console.log(id);
     axios
      .get(`${BASE_URL}/profile/${id}`)
      .then((result) => {
        console.log(result.data);
        setUserInfo(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <Nav/>
    <div className="content">
    <div className="profile">
      <div className="image">
        <img src="jason-leung-Xaanw0s0pMk-unsplash.jpg" alt="bacground"/>
      </div>
      <div className="profileImge">
        <img src="profile.png" />
      </div>
    <div className="content">
      
        <label>Email</label>
        <input type="email" placeholder="email" name="email" value={userInfo ? userInfo[0].email :"lodaing"} disabled  />
        <input type="text" placeholder="user name" name="userName" value={userInfo ? userInfo[0].userName :"lodaing"} disabled />
      
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userInfo ? userInfo[0].password :"lodaing"}
          disabled
        />
        <label>phone number</label>
        <input
          type="number"
          placeholder="phone number"
          name="phoneNumber"
          value={userInfo ? userInfo[0].phoneNumber :"lodaing"}
          disabled
        />
        <label>birth date</label>
        <input type="date" placeholder="birth date" name="bDate" value={userInfo ? userInfo[0].bDate :"lodaing"} disabled />
        </div>
        </div>
    </div>
    </>
  );
};

export default Profile;
