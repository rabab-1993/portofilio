import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTimes } from "react-icons/fa";
// import { SiFreelancer } from "react-icons/si";
import Contact from "../Contact/Contact";
import Programmer from "./programmer.png";
import "./style.css";

const Profile = () => {
  const [contactForm, setContactForm] = useState(false);

  return (
    <div className="profile">
      <img src={Programmer} alt="" className="img" />
      <h1>Hi! I'm Rabab Yousef</h1>
      <h2>Full-Stack Web Developer</h2>
      <div className="linkes">
        {/* <a
          href="https://twitter.com/Rabab_1419"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a> */}
        <a
          href="https://www.linkedin.com/in/rabab-yousef/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rabab-1993"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        {/* <a
          href="https://www.freelancer.com/u/rababyousef1414"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFreelancer />
        </a> */}
        <button onClick={() => setContactForm(true)} className="bttn">
          Hire Me!
        </button>
      </div>
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
    </div>
  );
};

export default Profile;
