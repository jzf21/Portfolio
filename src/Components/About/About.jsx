import React from "react";
import Accordion from "../Accordion/Accordion";

const About = () => {
  const myItems = [
    // Front-End Development
    {
      title: "Front-End ",
      content:
        "I confidently build interactive & responsive UIs using React, Vue.js, Angular, and more. State management, routing, and component development are second nature.",
    },
    {
      title: "Back-End",
      content:
        "Node.js,Express – I'm fluent in server-side technologies, crafting APIs and applications that thrive. Databases, authentication, and authorization are all in my wheelhouse.",
    },
    {
      title: "️ Database",
      content:
        "From relational giants like MySQL to the flexibility of MongoDB, I design and manage databases with efficiency and performance in mind. Data integrity and optimization are my priorities.",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2   md:justify-center r bg-peach px-4 md:px-40 h-auto overflow-hidden  ">
        <div className=" text-xl bg-peach flex flex-col gap-16 py-10 mt-10 w-[100vw] h-auto md:min-h-[100vh]  md:text-3xl selection:text-[#0e0d0d] selection:bg-[#ead2ab] tracking-wide">
          <div className="w-[150px] p-1 mb-4 bg-yellow"></div> 
          <p className="text-5xl leading-25 ">
            SERVICES I <br />
            OFFER
          </p>
          <p className="text-xl">Need a solution for your problem?</p>
          <div className="w-48 h-48 rounded-full bg-yellow flex flex-col justify-center items-center">
            <p className="font-bold">Let's talk</p>
          </div>
        </div>

        <div className="px-5 text-xl bg-peach flex flex-col gap-4 py-10 mt-10 h-auto md:h-[60vh]  md:text-3xl selection:text-[#0e0d0d] selection:bg-[#ead2ab] tracking-wide">
          <Accordion items={myItems} />
        </div>
      </div>
    </div>
  );
};

export default About;
