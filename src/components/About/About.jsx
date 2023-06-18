import { Box } from "@mui/material";
import React from "react";
import TiltCard from "./TiltCard/TiltCard";
import MotionWrapper from "../MotionWrapper/MotionWrapper";

const cards = [
  { image: null, text: "Software Engineer" },
  { image: null, text: "Software Engineer" },
  { image: null, text: "Software Engineer" },
  { image: null, text: "Software Engineer" },
];

const About = () => {
  return (
    <>
      <div id="about"></div>
      <div
        style={{
          position: "relative",
          paddingBlock: "80px 15rem",
          boxSizing: "border-box",
          //   height: "100vh",
        }}
      >
        <MotionWrapper>
          <h1 style={{ fontSize: "3rem" }}>About me</h1>
        </MotionWrapper>
        <MotionWrapper>
          <Box sx={{ width: { xs: "100%", md: "65%" } }}>
            I am a Software Engineer, with a Master's degree in Electrical and Computer Engineering
            (September 2018 - July 2023), University of Thessaly, Greece.
            <br />I am most skilled and creative, when it comes to web development, and especially
            frontend development. My favorite technologies, that I am most familiar and efficient
            with, are React and Express/Node, along with libraries that make the development
            experience better, like Redux and MateriaUI, and tools that make the user experience
            better, like Framer Motion and ThreeJS.
          </Box>
        </MotionWrapper>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(min(34%, 260px), 1fr))`,
            gridGap: "1rem",
            marginTop: "100px",
            justifyItems: "center"
          }}
        >
          {cards.map((card, index) => (
            <MotionWrapper key={index} extraDelay={0.12 * index}>
              <TiltCard card={card} />
            </MotionWrapper>
          ))}
        </Box>
      </div>
    </>
  );
};

export default About;
