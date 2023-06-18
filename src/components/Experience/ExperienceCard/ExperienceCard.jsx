import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "white" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      icon={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
            // backgroundColor: "red",
          }}
        >
          <img
            style={{
              width: "85%",
            }}
            src={experience.icon}
          ></img>
        </div>
      }
      iconStyle={{ backgroundColor: "white" }}
    >
      <h3 style={{ marginBottom: "5px" }}>{experience.title}</h3>
      <label>{experience.company}</label>
      <p>{experience.description}</p>
      {experience.link !== undefined && (
        <p>
          <a
            style={{ color: "orange", textDecoration: "none" }}
            href={experience.link}
            target="_blank"
          >
            {experience.link}
          </a>
        </p>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
