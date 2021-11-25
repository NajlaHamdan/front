import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import Description from "./../Description";
import "./style.css";
const BASE_URL = "http://localhost:4000"; //alt +arrow to top+bottom

const Display = ({ meal }) => {
  const navigate = useNavigate();
  function description(item) {
    axios
      .post(`${BASE_URL}/postItem`, {
        item,
      })
      .then(function (res) {
        navigate(`/description`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="content">
      <div className="cards">
        {meal.map((item, index) => (
          <div
            onClick={() => {
              description(item);
            }}
          >
            <p key={item._id}>{item.title}</p>
            <p>Ingredients {item.Ingredients}</p>
            <img src={item.src} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
