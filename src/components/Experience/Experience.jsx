import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MotionWrapper from "../MotionWrapper/MotionWrapper";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

import afoi from "../../assets/images/afoi_alexiou.png";

const experiences = [
  {
    icon: afoi,
    title: "Full Stack Developer",
    company: "Afoi Alexiou OE",
    description:
      "I developed and deployed an e-shop full stack web application for the company. The stack used for the project was the MERN stack.",
    link: "https://afoialexiou.gr",
    date: "October 2022 - February 2023",
  },
];

const Experience = () => {
  return (
    <div id="experience" style={{ paddingBlock: "150px 5rem" }}>
      <MotionWrapper>
        <h1 style={{ fontSize: "3rem" }}>Work Experience</h1>
      </MotionWrapper>
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
