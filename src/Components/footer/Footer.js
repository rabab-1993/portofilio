import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { SiFreelancer } from "react-icons/si";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
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
    </div>
  );
};

export default Footer;
