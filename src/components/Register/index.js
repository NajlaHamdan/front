import React from "react";
import "./style.css";
import axios from "axios";
import { useState } from "react";
const BASE_URL = "http://localhost:4000";
const Register = () => {
  function register(e) {
    e.preventDefault();
    console.log(e.target.bDate.value);
    axios
      .post(`${BASE_URL}/register`, {
        userName: e.target.userName.value,
        phoneNumber: e.target.phoneNumber.value,
        email: e.target.email.value,
        password: e.target.password.value,
        bDate: e.target.bDate.value,
      })
      .then(function (res) {
        // navigate(`/description/${item.trackId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <div className="image">
        <img src="/brooke-lark-oaz0raysASk-unsplash.jpg" alt="food" />
      </div>
      <div className="form">
        <form onSubmit={register}>
          <p>Sign up</p>
          <div className="part">
            {/* <label>user Name</label> */}
            <input type="text" placeholder="user name" name="userName" />
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
      </div>
    </div>
  );
};

export default Register;
