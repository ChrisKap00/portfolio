import { Box } from "@mui/material";
import React from "react";

import thesis_sign_up_form from "../../assets/images/projects/thesis/sign_up_form.png";
import thesis_home_page_loaded from "../../assets/images/projects/thesis/home_page_loaded.png";
import thesis_group_page from "../../assets/images/projects/thesis/group_page.png";
import thesis_my_profile from "../../assets/images/projects/thesis/my_profile.png";
import thesis_inbox from "../../assets/images/projects/thesis/inbox.png";

import afoi_alexiou_home_page from "../../assets/images/projects/afoi-alexiou/home_page.png";
import afoi_alexiou_contact from "../../assets/images/projects/afoi-alexiou/contact.png";
import afoi_alexiou_products from "../../assets/images/projects/afoi-alexiou/products.png";
import afoi_alexiou_product from "../../assets/images/projects/afoi-alexiou/product.png";

import ProjectCard from "./ProjectCard/ProjectCard";
import MotionWrapper from "../MotionWrapper/MotionWrapper";

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
    url: "https://ece-thesis-app.netlify.app",
    isThesis: true,
  },
  {
    images: [
      afoi_alexiou_home_page,
      afoi_alexiou_contact,
      afoi_alexiou_products,
      afoi_alexiou_product,
    ],
    title: "Afoi Alexiou e-shop",
    description:
      "I developed this app for a local company. It is a simple e-shop application for car parts where clients can find any part that the owners have uploaded to the database. They can also search to filter for products. This was my first big project and the simple design is intentional.",
    stack: "MERN",
    addOns: [
      "Redux",
      "Axios",
      "Material UI",
      "JWT (for admin panel login)",
      "SocketIO",
      "CORS",
      "Body Parser",
      "Mongoose",
      "Nodemailer",
    ],
    repo: "https://github.com/ChrisKap00/afoi-alexiou",
    url: "https://afoialexiou.gr",
  },
];

const Projects = (props) => {
  return (
    <Box
      id="projects"
      sx={{
        paddingBlock: "150px 17rem",
      }}
    >
      <MotionWrapper>
        <h1 style={{ fontSize: "3rem" }}>My Biggest Projects</h1>
      </MotionWrapper>
      <MotionWrapper>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, 300px), 1fr))`,
            gridGap: "2rem",
            marginTop: "100px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={{ ...project, index: index + 1 }} {...props} />
          ))}
        </Box>
      </MotionWrapper>
    </Box>
  );
};

export default Projects;
