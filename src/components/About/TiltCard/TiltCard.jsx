import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

// const options = {
//   reverse: false,
//   max: 35,
//   perspective: 1000,
//   scale: 1,
//   speed: 3,
//   transition: true,
//   axis: null,
//   reset: true,
//   easing: "cubic-bezier(.03,.98,.52,.99)",
// };

const direction = "left";
const type = "spring";
const delay = 0.2;
const duration = 1;

const TiltCard = ({ card }) => {
  return (
    // <Box sx={{}}>
      <Tilt
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          boxShadow: "0 0 50px -5px rgba(255, 255, 255, 0.1)",
        }}
        // options={options}
      >
        <Box
          sx={{
            padding: "rem",
            width: { xs: "100%", sm: "260px" },
            height: { xs: "260px", sm: "320px" },
            maxWidth: "260px",
            maxHeight: "320px",
            borderRadius: "20px",
            userSelect: "none",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: "2rem",
            wordBreak: "break-word",
            backgroundColor: "#150a30",
            color: "white",
            border: "2px solid rgba(255, 200, 200, 0.15)",
            boxSizing: "border-box",
          }}
        >
          {card.image}
          <label style={{ textAlign: "center" }}>{card.text}</label>
        </Box>
      </Tilt>
    // </Box>
  );
};

export default TiltCard;
