import React from "react";
import "./style.css";
import p from "./pp.jpg";
const About = () => {
  return (
    <div className="about" id="about-me">
      <p>
        <b>I'm Rabab Yousef</b>, a Junior Full-Stack Web Developer, i'm a
        passionate and a quick leaner and a Hard-working programmer with a flair
        for creating elegant solutions. Looking to use my programming skills
      </p>
      <img src={p} alt="" />
    </div>
  );
};

export default About;
