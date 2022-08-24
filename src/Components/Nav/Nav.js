import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
// import'antd/dist/antd.less';
import "antd/dist/antd.css";
import "./style.css";
const Nav = () => {
  const items = [
    {
      label: <Link to={"/"}>About Me</Link>,
      key: "about",
    },
    {
      label: <Link to={"/projects"}>Projects</Link>,
      key: "projects",
    },
    {
      label: <Link to={"/contact"}>Contact Me</Link>,
      key: "contact",
    },
  ];

  const [current, setCurrent] = useState("about");

  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    
    <>
      {/* <div style={{ flex: "0 0 50px", height: 20}} /> */}
        <Menu
          // style={{ flex: "auto", minWidth: 0, }}
          className="nav-bar"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          />
      {/* <div style={{ flex: "0 0 50px", height: 20}} /> */}
          </>
  )
};

export default Nav;
