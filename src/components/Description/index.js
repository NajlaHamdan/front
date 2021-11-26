import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
const BASE_URL = "http://localhost:4000";
const Description = () => {
  const [item, setItem] = useState([]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    getItem();
  }, []);

  useEffect(() => {
    getComment();
  }, [item]);

  const getItem = async () => {
    const info = await axios.get(`${BASE_URL}/getItem`);
    console.log(info.data);
    setItem(info.data);
  };

  const getComment = async () => {
    const id = "619f6dfaf5629b295305885b";
    console.log(id);
    const info = await axios.post(`${BASE_URL}/getComment`, { id });
    console.log(info.data);
    setComment(info.data);
  };
  console.log(comment);
  return (
    <>
      {item.map((item, index) => (
        <div key={item._id}>
          <p>{item.title}</p>
          <div className="box">
            <div className="Ingredients">
              <p>Ingredients {item.Ingredients}</p>
            </div>
            <div className="image">
              <img src={item.src} alt={item.title} />
            </div>
          </div>
          <div>
            <p>HowToPrepare</p>
           <p className="HowToPrepare">{item.HowToPrepare}</p>
          </div>
        </div>
      ))}
      {comment.map((item, index) => (
        <div key={index}>
          <p>{item.value}</p>
        </div>
      ))}
    </>
  );
};

export default Description;
{
  /* <div>
      {
        <>
          <div>
            <li key={item._id}>
              {item.title}
              {item.Ingredients}
              {item.HowToPrepare}
              {item.Nopeople}
              {item.cookingTime}
            </li>
          </div>
           <button onClick={`()=>{addToFav(${item.trackId})}`}>
            add to favorite
          </button> 
        </>
      }
    </div> */
}
