import { Box } from "@mui/material";
import React from "react";
import thesis_sign_up_form from "../../assets/images/projects/thesis/sign_up_form.png";
import thesis_home_page_loaded from "../../assets/images/projects/thesis/home_page_loaded.png";
import thesis_group_page from "../../assets/images/projects/thesis/group_page.png";
import thesis_my_profile from "../../assets/images/projects/thesis/my_profile.png";
import thesis_inbox from "../../assets/images/projects/thesis/inbox.png";
import ProjectCard from "./ProjectCard/ProjectCard";

const projects = [
  {
    images: [
      thesis_sign_up_form,
      thesis_home_page_loaded,
      thesis_group_page,
      thesis_my_profile,
      thesis_inbox,
    ],
    title: "Thesis Social Media",
    description:
      "I developed this app for my diploma thesis. It is a social media for students of the university where they can collaborate, and solve problems and assignments together through posts and comments, and private chat rooms.",
    stack: "MERN",
    addOns: [
      "Redux",
      "Axios",
      "Material UI",
      "JWT",
      "SocketIO",
      "CORS",
      "Body Parser",
      "Mongoose",
      "Nodemailer",
    ],
    repo: "https://github.com/ChrisKap00/diplomatiki",
    url: "https://ece-thesis-app.netlify.app/",
    isThesis: true,
  },
  {
    images: [
      thesis_sign_up_form,
      thesis_home_page_loaded,
      thesis_group_page,
      thesis_my_profile,
      thesis_inbox,
    ],
    title: "Thesis Social Media",
    description:
      "I developed this app for my diploma thesis. It is a social media for students of the university where they can collaborate, and solve problems and assignments together through posts and comments, and private chat rooms.",
    stack: "MERN",
    addOns: [
      "Redux",
      "Axios",
      "Material UI",
      "JWT",
      "SocketIO",
      "CORS",
      "Body Parser",
      "Mongoose",
      "Nodemailer",
    ],
    repo: "https://github.com/ChrisKap00/diplomatiki",
    url: "https://ece-thesis-app.netlify.app/",
  },
  {
    images: [
      thesis_sign_up_form,
      thesis_home_page_loaded,
      thesis_group_page,
      thesis_my_profile,
      thesis_inbox,
    ],
    title: "Thesis Social Media",
    description:
      "I developed this app for my diploma thesis. It is a social media for students of the university where they can collaborate, and solve problems and assignments together through posts and comments, and private chat rooms.",
    stack: "MERN",
    addOns: [
      "Redux",
      "Axios",
      "Material UI",
      "JWT",
      "SocketIO",
      "CORS",
      "Body Parser",
      "Mongoose",
      "Nodemailer",
    ],
    repo: "https://github.com/ChrisKap00/diplomatiki",
    url: "https://ece-thesis-app.netlify.app/",
  },
  {
    images: [
      thesis_sign_up_form,
      thesis_home_page_loaded,
      thesis_group_page,
      thesis_my_profile,
      thesis_inbox,
    ],
    title: "Thesis Social Media",
    description:
      "I developed this app for my diploma thesis. It is a social media for students of the university where they can collaborate, and solve problems and assignments together through posts and comments, and private chat rooms.",
    stack: "MERN",
    addOns: [
      "Redux",
      "Axios",
      "Material UI",
      "JWT",
      "SocketIO",
      "CORS",
      "Body Parser",
      "Mongoose",
      "Nodemailer",
    ],
    repo: "https://github.com/ChrisKap00/diplomatiki",
    url: "https://ece-thesis-app.netlify.app/",
  },
];

const Projects = (props) => {
  return (
    <Box
      id="projects"
      sx={{
        paddingBlock: "10rem 17rem",
      }}
    >
      <h1 style={{ fontSize: "3rem" }}>My Biggest Projects</h1>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(min(33%, 300px), 1fr))`,
          gridGap: "2rem",
          marginTop: "100px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={{ ...project, index: index + 1 }} {...props} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
