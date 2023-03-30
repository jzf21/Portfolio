import React from 'react';
import './Projects.css';
const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-8 md:gap-0 mx-auto tracking-wide">
      <div className="flex flex-col w-80 md:w-full bgblack card outline outline-1 gap-8 md:gap-16  md:min-h[300px] py-5 mx-auto ">
        <h2 className=" text-center justify-center items-center title-text uppercase ">Bon Appetit</h2>
        <p className="text-center px-5 text-2xl">
          Bon Appetit is a small intiative trying to solve the problems of food wastage and hunger by providing a
          platform which connects people with excess food or people who are willing to contribute food to
          Non-Profit-Organizations.
        </p>
      </div>
      <div className="flex flex-col w-80 md:w-full  bgblack card outline outline-1 gap-16 min-h[300px] py-5  mx-auto">
        <h2 className=" text-center justify-center items-center title-text uppercase ">The Library</h2>
        <p className="text-center px-5 text-2xl">
          An Online Library created using React.Js and Supabase. To promote reading habits by providing credits to
          people who frequently rent books.
        </p>
      </div>
      <div className="flex flex-col w-80 md:w-full bgblack card outline gap-16 outline-1 min-h[300px] py-5 mx-auto  ">
        <h2 className=" text-center justify-center items-center title-text uppercase ">The Solar System</h2>
        <p className="text-center px-5 text-2xl">
          A solar system simulation using Three.js and HTML,CSS. Just a fun project.
        </p>
      </div>
    </div>
  );
};

export default Projects;
