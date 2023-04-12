import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Projects from './Components/Projects/Projects';
import Banner from './Components/Banner/Banner';
import { Parallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import HorizontalScroll from './Components/Horizontal';
import ParallaxExample from './Components/Horizontal';
import ComputersCanvas from './Components/canvas/Computers';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei';
import EarthCanvas from './Components/canvas/Earth';
import StarsCanvas from './Components/canvas/Stars';
import Footer from './Components/Footer/Footer';


 
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ParallaxProvider>
        <Parallax speed={-20}>
          <div className=" h-[100vh] flex flex-col p-10 justify-center items-center tracking-wide selection:text-[#0e0d0d] selection:bg-[#ead2ab]">
            <h1 className="text-center text-[4em] md:text-[7em] uppercase items-center  weight-1000   ">
              Tinkering, Coding, Creating:
              <br /> A Student's Tech Adventure
            </h1>
            <h2 className="text-xl tracking-wide">Jozef Antony Neelamkavil</h2>
            <h2>Developer.Designer.Creator</h2>
          </div>
        </Parallax>
        <Parallax speed={20}>
          {' '}
          <StarsCanvas />
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <Parallax speed={50}>
              <ComputersCanvas />
            </Parallax>
            <Parallax speed={20}>
              <div className="px-5 text-xl md:text-3xl selection:text-[#0e0d0d] selection:bg-[#ead2ab] tracking-wide">
                <p className="text-[1.5em] md:text-[2em] ">
                  Hi, I'm <span className="underline underline-offset-4">Jozef Antony</span>
                </p>
                <p className="tracking-wide ">
                  <br />
                  As a dedicated and skilled full-stack student developer, I'm on a never-ending adventure to tinker,
                  code, and create. With a year of experience in developing innovative applications and websites, I'm
                  constantly pushing the limits of what's possible. I'm always eager to collaborate with fellow students
                  and to innovate on exciting new projects, bringing my passion for programming to every endeavor.
                </p>
              </div>
            </Parallax>
          </div>
        </Parallax>

        <Parallax speed={30}>
          <div>
            <Banner />
          </div>
        </Parallax>

        <Projects />
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
