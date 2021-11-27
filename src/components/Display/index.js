import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import Description from "./../Description";
import {CgMoreO} from "react-icons/cg";
import {IconContext} from "react-icons"
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
          key={item._id}
            onClick={() => {
              description(item);
            }}
          >
            
            <img src={item.src} alt={item.title} />
            <p key={item._id}>{item.title}</p>
            <IconContext.Provider
              value={{ color: "#EB5E28", size: "1.5rem", display: "inline" }}
            >
            <CgMoreO/>
            </IconContext.Provider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
