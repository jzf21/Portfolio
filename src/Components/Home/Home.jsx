import React from 'react'
import image from './../../assets/home.jpg'
const Home = () => {
  return (
    <div className=" h-[100vh] flex flex-col p-10 md:px-20 justify-center gap-4 items-start tracking-wide selection:text-[#0e0d0d] selection:bg-[#ead2ab]">
        <div className='w-[150px] p-1 mb-4 bg-peach'></div>
      <h1 className="text-left text-[4em] md:text-[6em] uppercase items-center  weight-1000 text-[#2C363F] tracking-wider relative z-10 ">
        I'm Jozef Antony
        <br /> Full-Stack Developer
      </h1>
      <p className='w-[50%] text-xl p-black'>
        I craft end-to-end web solutions, blending robust back-end functionality
        with elegant front-end designs for seamless and user-friendly
        experiences.
      </p>
      <img
        src={image}
        alt=""
        className="w-[40%] h-[70%]  absolute right-10 -z-50"
      />
    </div>
  );
}

export default Home