import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { GiRiceCooker } from "react-icons/gi";
import { IconContext } from "react-icons";
import "./style.css";
const BASE_URL = "http://localhost:4000";
const Description = () => {
  const [item, setItem] = useState([]);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    getItem();
  }, []);

  // useEffect(() => {
  //   getComment();
  // }, [item]);

  const getItem = async () => {
    const info = await axios.get(`${BASE_URL}/getItem`);
    console.log(info.data);
    setItem(info.data);
    getComment(info.data);
  };

  const getComment = (item) => {
    console.log(item[0]["_id"]);
    console.log(item);
    const id = item[0]._id;
    axios
      .get(`${BASE_URL}/getComment/${id}`)
      .then(function (res) {
        console.log(res.data);
        setComment(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const postComment = (e) => {
    const value = e.target.comment.value;
    const userId = JSON.parse(localStorage.getItem("users"));
    const id = item[0]._id;
    const comment = {
      value,
      userId,
    };
    axios
      .get(`${BASE_URL}/postComment`, {
        value,
        userId,
      })
      .then(function (res) {
        console.log(res.data);
        setComment(res.data);
        getItem();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="meal">
      {item.map((item, index) => (
        <div key={item._id}>
          <p className="title">{item.title}</p>
          <div className="box">
            <div className="smallBox">
              <div className="Ingredients">
                <p className="title">Ingredients</p>
                <p>{item.Ingredients}</p>
              </div>
              <div>
                <img src={item.src} alt={item.title} />
              </div>
            </div>
          </div>
          <div className="howToPre">
            <p className="title" style={{ display: "inline" }}>
              HowToPrepare
            </p>
            <IconContext.Provider
              value={{ color: "#EB5E28", size: "1.5rem", display: "inline" }}
            >
              <GiRiceCooker />
            </IconContext.Provider>
            <p className="HowToPrepare">{item.HowToPrepare}</p>
          </div>
          <div className="timepeople">
            <div className="nopeople">{item.Nopeople}</div>
            <div className="cooktime">{item.cookingTime}</div>
          </div>
        </div>
      ))}
      <p className="title"> Give us your feedback</p>
      {comment.map((item, index) => (
        <div key={index}>
          <p>{item.value}</p>
        </div>
      ))}
      <>
        <form onSubmit={postComment} method="post">
          <input type="text" name="comment" />
          <button type="submit" />
        </form>
      </>
    </div>
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
