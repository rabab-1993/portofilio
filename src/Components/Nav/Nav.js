import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import'antd/dist/antd.less';
import 'antd/dist/antd.css';
import "./style.css";
const Nav = () => {
  const items = [
    {
      label: (<Link to={"/"}>About Me</Link>),
      key: "about",
    },
    {
      label: (<Link to={"/projects"}>Projects</Link>),
      key: "projects",
    },
    {
      label: (<Link to={"/contact"}>Contact Me</Link>),
      key: "contact",
    },
  ];

  const [current, setCurrent] = useState("about");

  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      className="nav-bar"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Nav;
