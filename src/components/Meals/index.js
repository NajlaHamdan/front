import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Display from "../Display";
const BASE_URL = "http://localhost:4000";
const Meals = () => {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMeal();
  }, []);

  const getMeal = async () => {
    const result = await axios.get(`${BASE_URL}/getMeals`);
    console.log(result.data);
    setMeal(result.data);
    setLoading(false);
  };

  // console.log(meal);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  return (
    <div>
      {/* {loading ? <p>Data is loading...</p>:<div> */}
      {meal.length && <Display meal={meal} />}
      {/* </div>} */}
    </div>
  );
};

export default Meals;
