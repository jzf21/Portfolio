import React from "react";
import twitter from "../../assets/twitter-154-svgrepo-com.svg";
import github from "../../assets/github-142-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-161-svgrepo-com.svg";
import mail from "../../assets/mail-svgrepo-com.svg";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between  border-t border-gray-800 w-full px-10 md:px-40 py-10">
      <div className="flex flex-row gap-8 bg-yellow self-start">
        <a href="home">Home</a>
        <a href="#home">About</a>
        <a href="#home">Projects</a>
        <a href="#home">Contact</a>
      </div>

      <div className="flex flex-row gap-8  bg-yellow ">
        <a href="https://twitter.com/jozefantony7" target="_blank">
          <img src={twitter} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="https://linkedin.com/in/jozefantony" target="_blank">
          <img src={linkedin} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="https://github.com/jzf21" target="_blank">
          <img src={github} alt="" className="w-[24px] h-[24px]" />
        </a>
        <a href="mailto:jozefneelamkavil2003@gmail.com">
          <img src={mail} alt="" className="w-[24px] h-[24px]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
