import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMaterialui,
  SiAntdesign,
  SiGit,
  SiGithub,
} from "react-icons/si";

import "./style.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="icons">
        <i>
          <FaReact color="#1982c4" /> React
        </i>
        <i>
          <SiRedux color="#6a4c93" /> Redux
        </i>
        <i>
          <SiJavascript color="#FFD60A" /> Javascript
        </i>
        <i>
          <SiHtml5 color="#ff5400" /> Html5
        </i>
        <i>
          <SiCss3 color="#00bbf9" /> CSS
        </i>
        <i>
          <SiNodedotjs color="#6a994e" /> NodeJs
        </i>
        <i>
          <SiMongodb color="#008000" /> Mongodb
        </i>
        <i>
          <SiExpress /> ExpressJs
        </i>
        <i>
          <SiMaterialui color="#004e98" /> MaterialUi
        </i>
        <i>
          
          <SiAntdesign className="antd"/> Antdesign
        </i>
        <i>
          <SiGit color="#FFD60A" /> Git
        </i>
        <i>
          <SiGithub /> Github
        </i>
      </div>
    </div>
  );
};

export default Skills;
