import React, { useState } from "react";
import { GiFruitBowl } from "react-icons/gi";
import { HiOutlineCake } from "react-icons/hi";
import { FaWineGlassAlt } from "react-icons/fa";
import Nav from "../Nav";
import "./style.css";
const Home = () => {
  <Nav /> 
  const [categ,setCateg] =useState( [
    { type: "sweet", icon: <HiOutlineCake /> },
    { type: "drink", icon: <FaWineGlassAlt /> },
    { type: "stuffed", icon: <GiFruitBowl /> },
  ]);
  console.log(categ[0].type);
  return (
    <div>
      <Nav /> 
      <div className="categ">
        <div className="box">
          {categ.map((item) => {
            <>
              <div>
                <p>{item.type}</p>
              </div>
              {/* <div>{item.icon}</div> */}
            </>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
