import { Box } from "@mui/material";
import React from "react";
import TiltCard from "./TiltCard/TiltCard";
import MotionWrapper from "../MotionWrapper/MotionWrapper";
import Tech from "../Tech/Tech";

const cards = [
  { image: null, text: "Software Engineer" },
  { image: null, text: "Software Engineer" },
  { image: null, text: "Software Engineer" },
  { image: null, text: "Software Engineer" },
];

const About = () => {
  return (
    <div
      id="about"
      style={{
        position: "relative",
        paddingBlock: "150px 5rem",
        boxSizing: "border-box",
      }}
    >
      <MotionWrapper>
        <h1 style={{ fontSize: "3rem" }}>About me</h1>
      </MotionWrapper>
      <MotionWrapper styles={{ marginBottom: "5rem" }}>
        <Box sx={{ width: { xs: "100%", md: "65%" } }}>
          I am a Software Engineer, with a Master's degree in Electrical and Computer Engineering
          (September 2018 - July 2023), University of Thessaly, Greece.
          <br />I am most skilled and creative, when it comes to web development, and especially
          frontend development. My favorite technologies, that I am most familiar and efficient
          with, are React and Express/Node, along with libraries that make the development
          experience better, like Redux, MaterialUI and Framer Motion, and tools that make the user
          experience better, like ThreeJS.
        </Box>
      </MotionWrapper>
      <Tech />
    </div>
  );
};

export default About;
