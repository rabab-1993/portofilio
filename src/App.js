import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <Nav />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
