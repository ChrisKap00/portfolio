import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import hero from "../../assets/images/hero.png";
import "./Hero.css";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Software Engineer/Frontend Developer";
  const [index, setIndex] = useState(0);

  const [cursor, setCursor] = useState("|");

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [index]);

  useEffect(() => {
    setTimeout(() => {
      setCursor(cursor === "" ? "|" : "");
    }, 500);
  }, [cursor]);

  return (
    <Box sx={{ height: "calc(100vh - 75px)", position: "relative" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        sx={{ width: "100%", height: "100%" }}
      >
        <Box
          flex={1}
          sx={{
            // backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <label
              style={{ fontWeight: "600", fontSize: "3rem", display: "block", textAlign: "center" }}
            >
              Hi, I'm Christos
            </label>
            <label
              className="typewriter"
              style={{
                display: "block",
                fontWeight: "600",
                fontSize: "1.5rem",
                textAlign: "center",
                // backgroundColor: "blue",
                position: "relative",
                marginTop: "10px",
              }}
            >
              {text}
              <label style={{ position: "absolute" }}>{cursor}</label>
            </label>
            <label
              style={{
                display: "block",
                // fontWeight: "600",
                // fontSize: "1.5rem",
                textAlign: "center",
                // backgroundColor: "blue",
                position: "relative",
                marginTop: "10px",
              }}
            >
              Self-motivated, team player with strong organizational and interpersonal skills.
              Always looking to learn new skills, take on extra responsibilities, and grow
              professionally.
            </label>
          </Box>
        </Box>
        <Box
          flex={1}
          sx={{
            // backgroundColor: "blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ padding: 0, position: "relative", width: "100%" }}>
            <img
              src={hero}
              style={{ margin: 0, width: "100%", borderRadius: "50%", userSelect: "none" }}
              alt="Hero Image"
            ></img>
            <Box
              sx={{
                position: "absolute",
                top: -1,
                bottom: -1,
                left: -1,
                right: -1,
                // backgroundColor: "green",
                borderRadius: "50%",
                boxShadow: "inset 0 0 50px 80px #040615",
              }}
            ></Box>
          </Box>
        </Box>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: 0,
          //   backgroundColor: "red",
          width: "100%",
          padding: "2rem",
        }}
      >
        <a href="#about">
          <Box
            sx={{
              width: "20px",
              height: "35px",
              border: "3px solid rgba(255, 255, 255, 0.8)",
              borderRadius: "25px",
              display: "flex",
              justifyContent: "center",
              paddingBlock: "5px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <div id="scroller"></div>
          </Box>
        </a>
      </Box>
    </Box>
  );
};

export default Hero;
