import React from "react";
import BallCanvas from "./Ball/Ball";
import MotionWrapper from "../MotionWrapper/MotionWrapper";

const technologies = [
  { name: "HTML5", icon: "html5.png" },
  { name: "CSS3", icon: "css3.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "React", icon: "react.png" },
  { name: "Redux", icon: "redux.png" },
  { name: "MUI", icon: "mui.png" },
  //   { name: "Million", icon: "million" },
  { name: "Framer Motion", icon: "framer_motion.png" },
  { name: "Three", icon: "three.svg" },
  { name: "Node", icon: "node.png" },
  { name: "Express", icon: "express.png" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "MongoDB", icon: "git.png" },
  { name: "Git", icon: "java.png" },
  { name: "Python", icon: "python.png" },
  { name: "C", icon: "c.png" },
  { name: "C++", icon: "cpp.png" },
];

const Tech = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingBottom: "5rem", flexWrap: "wrap" }}
    >
      {technologies.map((technology, index) => (
        <MotionWrapper key={index} extraDelay={0.1 * index}>
          <BallCanvas technology={technology} />
        </MotionWrapper>
      ))}
    </div>
  );
};

export default Tech;
