import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {CgProfile} from "react-icons/cg";
import { IconContext } from "react-icons";
import {IoMdArrowDropdown} from "react-icons/io"
const Nav = () => {
  return (
    <div className="navBar">
      <Link to="/home">
        <p>home</p>
      </Link>
      <Link to="/meals">
        <p>meal</p>
      </Link>
      <IconContext.Provider value={{ color: "white", className: "global-class-name", size:"2rem" }}>
      <div className="dropdown">
      <Link to="/profile" className="dropbtn">
      <CgProfile />
      </Link>
      <div class="dropdown-content">
      <Link to="/profile">profile</Link>
      <Link to="/logout">logout</Link>
    </div>
    </div>
      
      </IconContext.Provider>
    </div>
  );
};

export default Nav;
