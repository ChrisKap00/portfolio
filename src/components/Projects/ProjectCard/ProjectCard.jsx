import { Box, Card, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { wrap } from "popmotion";
import "./ProjectCard.css";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ProjectCard = ({ project, projectOpen, setProjectOpen }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const screenHeight = window.innerHeight;
  const [imageHeight, setImageHeight] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, project.images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setProjectOpen(null);
      }
    });
  }, []);

  return (
    <LayoutGroup>
      {projectOpen !== project.index ? (
        <motion.div
          layoutId={project.index}
          onClick={() => {
            setProjectOpen(project.index);
          }}
          style={{ width: "fit-content", userSelect: "none" }}
        >
          <Tilt>
            <motion.div
              style={{
                backgroundColor: "#150A30",
                color: "white",
                maxWidth: "300px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={project.images[0]}
                  style={{ maxWidth: "300px", borderRadius: "10px 10px 0 0", userSelect: "none" }}
                ></img>
              </div>
              <Box sx={{ padding: "10px" }}>
                <h4 style={{ margin: 0 }}>{project.title}</h4>
                <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.85rem" }}>
                  {project.description}
                </p>
              </Box>
            </motion.div>
          </Tilt>
        </motion.div>
      ) : (
        <motion.div
          layoutId={project.index}
          layout="size"
          style={{
            backgroundColor: "#150A30",
            color: "white",
            position: "fixed",
            top: !matches ? "35px" : `calc(50% - ${(screenHeight - 70) / 2}px)`,
            left: !matches ? "35px" : "calc(50% - 365px)",
            right: !matches ? "35px" : "",
            bottom: !matches ? "35px" : "",
            width: !matches ? "auto" : "730px",
            height: !matches ? "auto" : `${screenHeight - 70}px`,
            zIndex: 3,
            borderRadius: "10px",
            cursor: "pointer",
            useSelect: "none",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: `${imageHeight}px`,
              position: "relative",
              borderRadius: "10px",
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                id={`${project.index}-${imageIndex}`}
                style={{ position: "absolute", width: "100%" }}
                key={page}
                src={project.images[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                onLoad={(e) => {
                  setImageHeight(
                    document.getElementById(`${project.index}-${imageIndex}`).clientHeight
                  );
                }}
              />
            </AnimatePresence>
            <div
              style={{
                top: "160px",
                position: "absolute",
                background: "white",
                borderRadius: "30px",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                userSelect: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "18px",
                zIndex: 2,
                right: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
              onClick={() => paginate(1)}
            >
              {"‣"}
            </div>
            <div
              style={{
                top: "160px",
                position: "absolute",
                background: "white",
                borderRadius: "30px",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                userSelect: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "18px",
                zIndex: 2,
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                transform: "scale(-1)",
              }}
              onClick={() => paginate(-1)}
            >
              {"‣"}
            </div>
          </Box>
          <div style={{ paddingInline: "20px" }}>
            <h2>{project.title}</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.65)", marginBottom: "30px" }}>
              {project.description}
            </p>
            <div style={{ display: "flex" }}>
              <div style={{ width: "fit-content" }}>
                <p>
                  Stack: <b>{project.stack}</b>
                </p>
                <p>Add-ons:</p>
                <ul style={{ margin: 0 }}>
                  {project.addOns.map((addOn, index) => (
                    <li key={index}>{addOn}</li>
                  ))}
                </ul>
                <p>and many more...</p>
              </div>
              <div style={{ paddingLeft: "10px" }}>
                <p>
                  Github repo:{" "}
                  <a style={{ color: "orange" }} href={project.repo} target="_blank">
                    {project.repo}
                  </a>
                </p>
                <p style={{ lineHeight: 1.5 }}>
                  URL:{" "}
                  <a style={{ color: "orange" }} href={project.url} target="_blank">
                    {project.url}
                  </a>
                  <br></br>
                  {project.isThesis && "(Only students of the university can sign up)"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </LayoutGroup>
  );
};

export default ProjectCard;
