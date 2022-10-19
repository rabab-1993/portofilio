import React, { useState } from "react";
import { Menu } from "antd";
import { FaTimes } from "react-icons/fa";
import Contact from "../Contact/Contact";
import "./style.css";

const Nav = () => {
  const [current, setCurrent] = useState("");
  const [contactForm, setContactForm] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: <button onClick={() => window.scrollTo({ top: 0 })}>Home</button>,
      key: "home",
    },
    {
      label: <a href="#about-me">About Me</a>,
      key: "about",
    },
    {
      label: <a href="#projects">Projects</a>,
      key: "projects",
    },
    {
      label: <a href="#skills">Skills</a>,
      key: "skills",
    },
    {
      label: <h4 onClick={() => setContactForm(true)}>Contact Me</h4>,
      key: "contact",
    },
  ];

  return (
    <>
      <Menu
        // style={{ flex: "auto", minWidth: 0, }}
        className="nav-bar"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {contactForm ? (
        <>
          <FaTimes
            className="close-bttn"
            onClick={() => setContactForm(false)}
          />
          <Contact />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Nav;
