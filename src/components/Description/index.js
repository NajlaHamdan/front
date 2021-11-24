import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:4000";
const Description = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const info = await axios.get(`${BASE_URL}/getItem`);
    console.log(info.data);
    setItem(info.data);
  };

  return (
      <>
    {item.map((item, index) => (
        <div>
          <p key={item._id}>{item.title}</p>
          <p>Ingredients {item.Ingredients}</p>
          <img src={item.src} alt={item.title} />
        </div>
      ))}
      </>
  );
};

export default Description;
{/* <div>
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
    </div> */}