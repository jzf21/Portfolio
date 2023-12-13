import React from "react";
import { Project } from "../Projects/Projects";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Bon Appetit",
      description:
        "Bon Appetit is a small intiative trying to solve the problems of food wastage and hunger by providing a platform which connects people with excess food or people who are willing to contribute food to Non-Profit-Organizations.",
      link: "https://github.com/jzf21/BonAppetit",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      title: "EasyCare",
      description:
        "A medical Consultancy system that speeds up the process of getting a medical consultation by providing a platform for doctors to provide their services online using Text-to-Speech and AI Diagnosis.Patient Data is also stored in a secure decentralised database.",
      link: "",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      title: "The Library",
      description:
        "An Online Library created using React.Js and Supabase. To promote reading habits by providing credits to people who frequently rent books.",
      link: "",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      title: "The Solar System",
      description:
        "A solar system simulation using Three.js and HTML,CSS. Just a fun project.",
      link: "",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      title: "M3MORY",
      description:
        "A web3 based secure storage client to allow Patients to retreive their confidental medical info when tranferring their healthcare from one establishment to another. Their primary healthcare provider has access to upload the required documents and patients can access them.",
      link: "",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      title: "Criminal Database",
      description:
        "A GUI crime record management system built with python. Modules used :Pillow,Mysql,Tkinter,Matplotlib.",
      link: "",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      title: "ANTI-WRITERS BLOCK",
      description:
        "A flask project which uses OpenAI to generate scripts,scenarios based on the inputs provided by the user. This project is meant to help artists to generate scenes in case they are facing a writer's block.",
      link: "",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      title: "PDF-TO-TEXT USING OCR",
      description:
        "A python project that takes MCQs from pdf and store it in a database to simplify the data entry process. Acts as a service for edTech companies",
      link: "",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
  ];
  return (
    <div className="py-20">
        <h1>Projects</h1>
      <div
        id="projects"
        className="grid grid-cols-1 md:grid-cols-3  gap-8 md:gap-0 mx-auto tracking-wide"
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
