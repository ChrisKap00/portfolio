import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton/MenuButton";
import Menu from "./Menu/Menu";

const height = "75px";

const showMenu = {
  enter: {
    opacity: 1,
    y: 0,
    display: "block",
  },
  exit: {
    y: -5,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    });
  }, []);

  return (
    <Box
      component="div"
      sx={{
        height,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#040615",
        zIndex: 2,
        width: "100%",
        paddingInline: { xs: "1rem", sm: "2rem" },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", height, position: "relative" }}>
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
            display: { xs: "none", smmd: "flex" },
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
        <Box
          sx={{
            display: {
              xs: "flex",
              smmd: "none",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            },
          }}
        >
          <div
            id="backdrop"
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: isMenuOpen ? "block" : "none",
              zIndex: 5,
            }}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          ></div>
          <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <Menu
            style={{
              position: "absolute",
              top: "75px",
              right: 0,
              backgroundColor: "#150A30",
              borderRadius: "10px",
              width: "200px",
              overflow: "hidden",
              zIndex: 6,
            }}
            isOpen={isMenuOpen}
            setIsOpen={setIsMenuOpen}
          >
            <a
              href="#home"
              style={{
                display: "flex",
                color: "white",
                textDecoration: "none",
                alignItems: "center",
                borderRadius: "10px 10px 0 0",
                padding: "10px 20px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
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
                alignItems: "center",
                borderRadius: "10px 10px 0 0",
                padding: "10px 20px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
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
                alignItems: "center",
                borderRadius: "10px 10px 0 0",
                padding: "10px 20px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
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
                alignItems: "center",
                borderRadius: "10px 10px 0 0",
                padding: "10px 20px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
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
                alignItems: "center",
                borderRadius: "10px 10px 0 0",
                padding: "10px 20px",
              }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Contact
            </a>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
