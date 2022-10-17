import React from "react";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import "antd/dist/antd.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import Skills from "./Components/skils/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
