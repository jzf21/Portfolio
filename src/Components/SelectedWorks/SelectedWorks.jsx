import React from "react";
import image from "./../../assets/home.jpg";
const SelectedProjects = ({ name, title, description, img, link, index }) => {
  return (
    <div className="flex md:flew-row border-[#2c363f] border-[2px] w-[100%]">
      {index % 2 === 0 ? (
        <div className="w-full h-full md:block hidden">
          <img src={image} alt="" className="w-full" />
        </div>
      ) : null}

      <div className="flex flex-col justify-center gap-8  self-center w-full  text-left p-black my-10 mx-10 md:ml-10 ">
        <p className="text-xl">{name}</p>
        <p className="text-3xl font-bold">{title}</p>
        <p className="">{description}</p>
        <div className="flex flex-row gap-4">
          <p className="text-2xl font-semibold hover:underline">
            <a href={link}>Know More</a>
          </p>
          <div className="w-[30px] h-[30px] rounded-full bgblack flex flex-col justify-center items-center p-peach">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#fff"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          </div>
        </div>
      </div>
      {index % 2 === 1 ? (
        <div className="w-full h-full md:block hidden">
          <img src={image} alt="" className="w-full" />
        </div>
      ) : null}
    </div>
  );
};
const SelectedWorks = () => {
  const projects = [
    {
      index: 1,
      title: "Full Stack Application",
      name: "Bon Appetit",
      description:
        "Bon Appetit is a small intiative trying to solve the problems of food wastage and hunger by providing a platform which connects people with excess food or people who are willing to contribute food to Non-Profit-Organizations.",
      link: "https://github.com/jzf21/BonAppetit",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      index: 2,
      title: "Full Stack Application",
      name: "EasyCare",
      description:
        "A medical Consultancy system that speeds up the process of getting a medical consultation by providing a platform for doctors to provide their services online using Text-to-Speech and AI Diagnosis.Patient Data is also stored in a secure decentralised database.",
      link: "",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
    {
      index: 3,
      title: "Full Stack Application",
      name: "Xpense",
      description:
        "A web application that helps you keep track of your expenses and income. It also provides you with a graphical representation of your expenses and income.",
      link: "https://xpense-client.vercel.app/",
      img: "https://assets.devfolio.co/hackathons/ee2081145b544ce4a872fa511c467296/projects/2f233dcdd95f4a06ab481ba3ed523ce8/f0d1790f-b290-4971-847b-a040c5dbd3f9.jpeg",
    },
  ];
  return (
    <div className="w-[100%] p-4 md:px-40 flex flex-col justify-center">
      <div className="w-[150px] p-1 mb-4 bgblack"></div>
      <p className="text-4xl md:text-5xl leading-25 p-black font-bold mb-4  ">
        SELECTED <br />
        WORKS
      </p>
      <div className="flex flex-col justify-center gap-8">
        {projects.map((project) => (
          <SelectedProjects
            name={project.title}
            title={project.name}
            description={project.description}
            img={project.img}
            link={project.link}
            index={project.index}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedWorks;
