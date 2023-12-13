import React, { useState } from "react";

const AccordionItem = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(index===1?true:false);

  return (
    <div className="flex flex-col border-b-[3px] border-[#f6f3cf] ">
      <div
        type="button"
        className="flex items-center justify-between px-4 py-2 text-left font-medium rounded-t-lg outline-none focus:outline-none  "
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-6xl font-bold align-middle my-5">
          {` 0${index}`}
          <span className="text-3xl font-normal align-middle ">{` ${title}`}</span>
        </p>

        <span className="transition-transform duration-150 ease-in-out">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 11 L19 11"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 L15 5"
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="px-4 py-4 prose text-xl dark:text-gray-300 w-full">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          index={index + 1}
        />
      ))}
    </div>
  );
};

export default Accordion;
