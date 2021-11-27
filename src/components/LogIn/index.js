import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";
// upload website logo
const BASE_URL = "http://localhost:4000";
const LogIn = () => {
  const [id, setId] = useState("");
  const [error,setError]=useState("");
  const navigate = useNavigate();
  function logIn(e) {
    e.preventDefault();
    console.log(e.target.email.value);
    axios
      .post(`${BASE_URL}/login`, {
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
        navigate(`/home`);
      })
      .catch(function (error) {
        console.log(error);
        setError("YOU AREADY HAVE ACCOUND BLEASE LOGIN");
      });
  }
  console.log(id);

  return (
    <div>
      <div className="container">
        <div className="image">
          <img src="/brooke-lark-HlNcigvUi4Q-unsplash.jpg" alt="food" />
        </div>
        <form onSubmit={logIn} method="post">
          <div className={error? "show":"hide"}>
            <span> {error}</span>
          </div>
          <input type="email" placeholder="Enter your email" name="email" required/>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
