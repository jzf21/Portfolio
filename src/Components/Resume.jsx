import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col bg-white h-full resume ">
      <div className="bg-[#303846] flex flex-col p-10  text-[#979ba2] ">
        <h1 className="text-white tracking-wide">Jozef Antony Neelamkavil</h1>
        <p className="text-[30px] !normal-case tracking-wide  ">
          Full-Stack Web Developer
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row md:flex-row">
          <div className="flex flex-col bg-white p-10 gap-4 text-[#979ba2] basis-1/3 ">
            <h1 className="text-[#303846] tracking-wide">Profile</h1>
            <p>
              Motivated full stack developer pursuing B.tech in Computer Science
              with expertise in Python programming, OCR, and LLM. Designed and
              built social impact projects. Strong problem-solving and
              collaborative skills. Committed to continuous learning and staying
              up-to-date with industry trends and technologies.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:flex-row w-50 basis-1">HELLOO</div>
      </div>
    </div>
  );
};

export default Resume;
