import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";
// upload website logo
const BASE_URL = "http://localhost:4000";
const LogIn = () => {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  function logIn(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    axios
      .post(`${BASE_URL}/logIn`, {
        // userName: e.target.userName.value,
        // phoneNumber: e.target.phoneNumber.value,
        email: e.target.email.value,
        password: e.target.password.value,
        // bDate: e.target.bDate.value,
      })
      .then(function (res) {
        console.log(res.data);
        const userId = res.data;
        console.log(userId);
        console.log(typeof userId);
        setId(userId);
        console.log(id);
        localStorage.setItem("users", JSON.stringify(userId));
        navigate(`/Home/${userId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(id);

  return (
    <div>
      <div className="container">
        <div className="image">
          <img src="/brooke-lark-HlNcigvUi4Q-unsplash.jpg" alt="food" />
        </div>
        <form onSubmit={logIn}>
          <input type="email" placeholder="Enter your email" name="email" />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
