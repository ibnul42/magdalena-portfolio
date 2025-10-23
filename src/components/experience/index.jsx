import React from "react";
import "./Experience.css";
import SingleExperience from "./SingleExperience";

const allExperience = [
  {
    title: "Kitron",
    role: "Senior Software Engineer",
    date: "Sep 2025 to Present",
  },
  {
    title: "Markel Corp",
    role: "Senior Software Engineer",
    date: "Jul 2024 to Sep 2025",
  },
];

const Experience = () => {
  return (
    <div className="container mb-4">
      <div className="main_title">Experience</div>

      <div className="row d-flex justify-content-between">
        {allExperience.map((experience, index) => (
          <SingleExperience key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
