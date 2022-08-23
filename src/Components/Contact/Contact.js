import React from "react";
// import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { IoDocumentTextSharp } from "react-icons/io5";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <p>
        You can contact me via
        <a href="https://www.linkedin.com/in/rabab-yousef/" target={"_blank"}>
          <FaLinkedin className="icon" />
        </a>
        , or visit my Github page
        <a
          href="https://github.com/rabab-1993"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>.
        {/* , or view my resume from here
        <a
          href="https://rababyousef.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoDocumentTextSharp className="icon" />
        </a> */}
      </p>
    </div>
  );
};

export default Contact;
