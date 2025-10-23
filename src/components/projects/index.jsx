import React from "react";
import "./Project.css";
import SingleProject from "./SingleProject";

const allProjects = [
  {
    title: "Multi Cloud Management",
    description:
      "Simplifies management of multi-cloud environments and on-premises infrastructure. It unifies management across different public clouds. It's also intended to work for everyone in an organization.",
    technologies: [
      "React JS",
      "Redux",
      "Reselect",
      "HTML5",
      "JavaScript",
      "JSX",
    ],
    image: "/cloud.jpg",
    preview: "",
    sourceCode: "",
  },
  {
    title: "Event management solution ",
    description:
      "Managing events, estimations, tracking cost, standards, cost rates etc. This project will be a one stop for the new outages and event management and will eliminate the need to go into multiple different application.",
    technologies: [
      "Angular",
      "TypeScript",
      "Predix",
      "Phonegap",
      "HTML5",
      "NodeJs",
      "SCSS",
    ],
    image: "/event.jpg",
    preview: "",
    sourceCode: "",
  },
  {
    title: "Convert Storefronts from Bootstrap 2 to Bootstrap 3",
    description:
      "The project’s goal is to convert multiple web storefronts from bootstrap 2 to bootstrap 3 for Mechanical and Electronic equipment sales using cloud craze and sales force software.",
    technologies: [
      "HTML5",
      "JavaScript",
      "jQuery",
      "Handlebars JS",
      "Cloudcraze",
      "Salesforce",
      "Angular",
      "Grunt",
    ],
    image: "/bootstrap.jpg",
    preview: "",
    sourceCode: "",
  }
];

const Project = () => {
  return (
    <div className="container" id="projects">
      <div className="main_title">Projects</div>
      <div className="row">
        {allProjects.map((project, index) => {
          return <SingleProject key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Project;
