import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:4000";
const Profile = () => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    profile();
  }, []);
  const profile = async () => {
    let id = localStorage.getItem("users");
    console.log(id);
    const result = await axios.get(`${BASE_URL}/profile`, { id });
    console.log(result);
    setUserInfo(result);
  };
  console.log(userInfo);
  return (
    <div className="container">
    {/* <div className="form"> */}
      <form >
        <p>Sign up</p>
        <div className="part">
          <label>{userInfo.userName}</label>
          <input type="text"  value={userInfo.userName} name="userName" />
        </div>
        <div className="part">
          {/* <label>Email</label> */}
          <input type="email" placeholder="email" name="email" />
        </div>
        <div className="part">
          {/* <label>password</label> */}
          <input type="password" placeholder="password" name="password" />
        </div>
        <div className="part">
          {/* <label>phone number</label> */}
          <input
            type="number"
            placeholder="phone number"
            name="phoneNumber"
          />
        </div>
        <div className="part">
          {/* <label>birth date</label> */}
          <input type="date" placeholder="birth date" name="bDate" />
        </div>
        <input type="submit" value="sign up" />
        <center>
          {" "}
          Already have account <a>sign in</a>
        </center>
      </form>
    {/* </div> */}
  </div>
  )
};

export default Profile;
