import React from "react";
import "./Projects.css";

const Project = ({ title, description, link }) => {
  return (
    <div className="flex flex-col w-80 md:w-full bgblack card outline outline-1 gap-8 md:gap-16  md:min-h[300px] py-5 mx-auto ">
      <a href={link} target="_blank">
        <h2 className="underline text-center justify-center items-center title-text uppercase ">
          {title}
        </h2>
      </a>
      <p className="text-center px-5 text-2xl">{description}</p>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Bon Appetit",
      description:
        "Bon Appetit is a small intiative trying to solve the problems of food wastage and hunger by providing a platform which connects people with excess food or people who are willing to contribute food to Non-Profit-Organizations.",
      link: "https://github.com/jzf21/BonAppetit",
    },
    {
      title: "The Library",
      description:
        "An Online Library created using React.Js and Supabase. To promote reading habits by providing credits to people who frequently rent books.",
      link: "",
    },
    {
      title: "The Solar System",
      description:
        "A solar system simulation using Three.js and HTML,CSS. Just a fun project.",
      link: "",
    },
    {
      title: "M3MORY",
      description:
        "A web3 based secure storage client to allow Patients to retreive their confidental medical info when tranferring their healthcare from one establishment to another. Their primary healthcare provider has access to upload the required documents and patients can access them.",
      link: "",
    },
    {
      title: "Criminal Database",
      description:
        "A GUI crime record management system built with python. Modules used :Pillow,Mysql,Tkinter,Matplotlib.",
      link: "",
    },
    {
      title: "ANTI-WRITERS BLOCK",
      description:
        "A flask project which uses OpenAI to generate scripts,scenarios based on the inputs provided by the user. This project is meant to help artists to generate scenes in case they are facing a writer's block.",
      link: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-8 md:gap-0 mx-auto tracking-wide">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
