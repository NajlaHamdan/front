import React from "react";
import { useNavigate} from "react-router";
import {useEffect} from "react"
const LogOut = () => {
    const navigate=useNavigate();
  useEffect(() => {
    LogOut();
  }, []);
  
  const LogOut = () => {
    localStorage.clear();
    navigate(`/`);
  };
  return <div></div>;
};

export default LogOut;
