import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to={"/"}>About Me</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/contact"}>Contact Me</Link>
    </nav>
  );
};

export default Nav;
