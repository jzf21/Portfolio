import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div className="grid grid-cols-3  gap-0 justify-start ">
      <div className="flex flex-col w-full bgblack card outline gap-16 min-h[300px] py-5 ">
        <h2 className=" text-center justify-center items-center title-text uppercase ">Bon Appetit</h2>
      </div>
      <div className="flex flex-col w-full bgblack card outline gap-16 min-h[300px] py-5 ">
        <h2 className=" text-center justify-center items-center title-text uppercase ">The Library</h2>
      </div>
      <div className="flex flex-col w-full bgblack card outline gap-16 min-h[300px] py-5 ">
        <h2 className=" text-center justify-center items-center title-text uppercase ">The Solar System</h2>
      </div>
    </div>
  );
}

export default Projects