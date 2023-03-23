import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './Components/Projects/Projects';
import Banner from './Components/Banner/Banner';
import { Parallax, ParallaxProvider ,ParallaxBanner} from 'react-scroll-parallax';
import HorizontalScroll from './Components/Horizontal';
import ParallaxExample from './Components/Horizontal';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ParallaxProvider>
        <Parallax speed={0}>
          <div className=" h-[100vh] flex flex-col p-10 justify-center items-center">
            <h1 className="text-center text-[7em] uppercase items-center  weight-1000   ">
             Some Really Catchy Text That Gains Attention
            </h1>
            <h2>Jozef Antony Neelamkavil</h2>
            <h2>Developer.Designer.Creator</h2>
          </div>
        </Parallax>

        <Parallax speed={30}>
          <div>
            <Banner />
          </div>
        </Parallax>

        <Projects />

       
      </ParallaxProvider>
    </div>
  );
}

export default App
