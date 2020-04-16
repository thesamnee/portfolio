import React from "react";
import "./About.css";
import title from "./about.png";

const About = () => {
  return (
    <div className="aboutDiv">
      <img src={title} className="title" alt="title" />
      <p className="aboutTxt">
        I am a full stack web developer with a strong knack for creative problem
        solving and a constant desire to innovate simple solutions to complex
        problems. I have a background in motion graphics, which I leverage to
        make the most visually pleasing user experience possible. I hold a certificate in Full Stack Web Development from the University of Central
        Florida, where I learned how to be a dynamic and effective member
        (or leader) of a development team. A scholar of responsive web design, I
        always have my ear to the ground for the newest, most cutting edge
        developments in the world of web development. I hope to use these skills
        to create an unforgettable user experience everywhere that my code goes.
      </p>
    </div>
  );
};

export default About;
