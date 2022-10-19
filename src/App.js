import React from "react";
// import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import "antd/dist/antd.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Profile from "./Components/Profile/Profile";
import Skills from "./Components/skils/Skills";
import Footer from "./Components/footer/Footer";
// import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <About />
      <Projects />
      <Skills />
      <Footer />
       {/* <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
      <Footer />  */}
    </div>
  );
}

export default App;
