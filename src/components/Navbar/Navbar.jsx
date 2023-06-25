import { Box } from "@mui/material";
import React from "react";

const height = "75px";

const Navbar = () => {
  return (
    <Box
      component="div"
      sx={{
        height,
        position: "sticky",
        top: 0,
        backgroundColor: "#040615",
        zIndex: 2,
        width: "100%",
        paddingInline: { xs: "1rem", sm: "2rem" },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", height }}>
        <a
          href="#home"
          style={{
            fontWeight: "600",
            fontSize: "1.5rem",
            height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Christos Kapotos
        </a>
        <Box component="div" sx={{ flexGrow: 1 }}></Box>
        <Box
          sx={{
            display: { xs: "flex", xssm: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
            href="#about"
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
            About
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
            href="#projects"
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
            Projects
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
    </Box>
  );
};

export default Navbar;
