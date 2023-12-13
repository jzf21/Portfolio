import React from "react";
import Accordion from "../Accordion/Accordion";

const About = () => {
  const myItems = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "Benefits of using Tailwind CSS",
      content:
        "Tailwind provides utility-first CSS classes for rapid development.",
    },
    // ... add more items with just title and content
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <div className="px-5 text-xl bg-peach flex flex-col gap-4 py-10 w-[100vw] h-[60vh] mt-5 md:text-3xl selection:text-[#0e0d0d] selection:bg-[#ead2ab] tracking-wide">
          <p className="text-5xl leading-25 ">
            SERVICES I <br />
            OFFER
          </p>
          <p className="text-xl">Need a solution for your problem?</p>
        </div>

        <div className="px-5 text-xl bg-peach flex flex-col gap-4 py-10 w-[100vw] h-[60vh] mt-5 md:text-3xl selection:text-[#0e0d0d] selection:bg-[#ead2ab] tracking-wide">
          <Accordion items={myItems} />
        </div>
      </div>
    </div>
  );
};

export default About;
