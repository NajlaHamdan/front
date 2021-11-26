import React from "react";
import "./style.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <p>Get started</p>
          <div className="part">
            {/* <label>user Name</label> */}
            <input type="text" placeholder="user name" name="userName" required />
          </div>
          <div className="part">
            {/* <label>Email</label> */}
            <input type="email" placeholder="email" name="email" required />
          </div>
          <div className="part">
            {/* <label>password</label> */}
            <input type="password" placeholder="password" name="password" required />
          </div>
          <div className="part">
            {/* <label>phone number</label> */}
            <input
              type="number"
              placeholder="phone number"
              name="phoneNumber"
              required
            />
          </div>
          <div className="part">
            {/* <label>birth date</label> */}
            <input type="date" placeholder="birth date" name="bDate" />
          </div>
          <button type="submit" value="Sign up" >Sign up</button>
          <center style={{margin:`1%`}}>
            {" "}
            Already have account <Link to="/logIn" style={{color:`#EB5E28`,textDecoration:`none`}}>Sign in</Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Register;
