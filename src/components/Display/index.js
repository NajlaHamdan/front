import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import Description from "./../Description";
import "./style.css";
const BASE_URL = "http://localhost:4000";//alt +arrow to top+bottom

const Display = ({ meal }) => {
  const navigate=useNavigate();
  const description=(item,meal)=>{
  const itemtoDes=item;
  console.log(itemtoDes,"meal",meal);
  <Description item={item} meal={meal}/>
  // navigate(`/Description/${item}/${meal}`);
 }

  return (
    <div className="content">
      <div className="cards">
          {meal.map((item, index) => (
            <div onClick={()=>{description(item._id,meal)}}>
              <p key={item._id}>{item.title}</p>
              <p>Ingredients {item.Ingredients}</p>
              <img src={item.src} alt={item.title}/>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Display;
