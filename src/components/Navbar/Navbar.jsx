import { Box, Container, Typography } from "@mui/material";
import React from "react";

const height = "75px";

const Navbar = () => {
  return (
    <Box component="div" sx={{ height, display: "sticky", top: 0, backgroundColor: "#040615" }}>
      <Box sx={{ display: "flex", height }}>
        <label
          style={{
            fontWeight: "600",
            fontSize: "1.5rem",
            height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Christos Kapotos
        </label>
        <Box component="div" sx={{ flexGrow: 1 }}></Box>
        <a
          href="#home"
          style={{
            display: "flex",
            color: "white",
            textDecoration: "none",
            height,
            paddingInline: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Home
        </a>
        <a
          href="#experience"
          style={{
            display: "flex",
            color: "white",
            textDecoration: "none",
            height,
            paddingInline: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Experience
        </a>
        <a
          href="#work"
          style={{
            display: "flex",
            color: "white",
            textDecoration: "none",
            height,
            paddingInline: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Work
        </a>
        <a
          href="#contact"
          style={{
            display: "flex",
            color: "white",
            textDecoration: "none",
            height,
            paddingInline: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Contact
        </a>
      </Box>
    </Box>
  );
};

export default Navbar;
