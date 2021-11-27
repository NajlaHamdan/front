import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
const Nav = () => {
  return (
    <div className="navBar">
      <Link to="/home" style={{textDecoration:"none",color:"#FFFCF2" ,paddingRight:"15px"}}>
        <p>home</p>
      </Link>
      <Link to="/meals" style={{textDecoration:"none",color:"#FFFCF2"}}>
        <p>meal</p>
      </Link>
      <IconContext.Provider
        value={{ color: "white", className: "global-class-name", size: "2rem"  }}
      >
        <div className="dropdown">
          <Link to="/profile" className="dropbtn" value={{textDecoration:"none",color:"#FFFCF2",size:"2rem", paddingTop:"10px"}}>
            <CgProfile />
          </Link>
          <div className="dropdown-content">
            <Link to="/profile">profile</Link>
            <Link to="/logout">logout</Link>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Nav;
