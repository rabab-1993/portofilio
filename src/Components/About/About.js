import React from "react";
import "./style.css";
import p from "./pp.jpg";
const About = () => {
  return (
    <div className="about" id="about-me">
      <p>
        <b>I'm Rabab Yousef </b>, a Junior Full-Stack Web Developer. I have a
        bachelor's degree in human resource management. I have become a web
        developer because I love to create and design websites. I took with
        udacity a Nanodegree Program (Front-End web development | 2020) and
        entered a Bootcamp at Saudi Federation for Cybersecurity and
        Programming(Full Stack JavaScript Developer | 2022). I'm a passionate
        and quick learner and a Hard-working programmer with a flair for
        creating elegant solutions.
      </p>
      <img src={p} alt="" />
      <a
        href="https://rabab-1993.github.io/CV/"
        target="_blank"
        rel="noopener noreferrer"
        className="resume"
      >
        Resume
      </a>
    </div>
  );
};

export default About;
