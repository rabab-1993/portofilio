import React from "react";
import About from "./About/About";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";
import Skills from "./skils/Skills";

const Home = () => {
  return (
    <div className="home">
      <Profile />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
