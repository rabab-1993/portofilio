import React from "react";
import { Modal } from "antd";
import Slider from "react-slick";
import { AiOutlineEye } from "react-icons/ai";
import data from "./data.json";
import "./style.css";

const Projects = () => {
  // const [visible, setVisible] = useState(false);
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };

  const info = (project) => {
    Modal.info({
      title: <h1 className="title">{project.name}</h1>,
      content: (
        <div className="content">
          <video controls className="video">
            <source src={project.video} type="video/mp4" />
          </video>
          <h1>{project.desc}</h1>

          <h3>
            {" "}
            <span>technology that used:</span> {project.technology}
          </h3>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            Visit Demo
          </a>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <Slider {...settings}>
        {data.map((project) => {
          return (
            <div key={project.id}>
              <img src={project.image} alt="" className="ant-image" />
              <div
                key={project.id}
                className="preview"
                onClick={() => {
                  info(project);
                  // setVisible(true);
                }}
              >
                <AiOutlineEye fontSize="20" />
                preview
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Projects;
