import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './Components/Projects/Projects';
import Banner from './Components/Banner/Banner';
import { Parallax, ParallaxProvider ,ParallaxBanner} from 'react-scroll-parallax';
import HorizontalScroll from './Components/Horizontal';
import ParallaxExample from './Components/Horizontal';
import ComputersCanvas from './Components/canvas/Computers';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei';
import EarthCanvas from './Components/canvas/Earth';
import StarsCanvas from './Components/canvas/Stars';

function Item({ url, scale, ...props }) {
  const visible = useRef(false);
  const [hovered, hover] = useState(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    );
    ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta);
    ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered ? 0 : 1, 4, delta);
  });
  return (
    <group {...props}>
      <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
    </group>
  );
}
function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    <Scroll>
      <Item url="/1.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 6, 0, 0]} />
      <Item url="/2.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />
      <Item url="/3.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />
      <Item url="/4.jpg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />
      <Item url="/5.jpg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />
      <Item url="/6.jpg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />
      <Item url="/7.jpg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />
      <Item url="/8.jpg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />
      <Item url="/12.jpg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />
    </Scroll>
  )}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ParallaxProvider>
        <Parallax speed={-10}>
          <div className=" h-[100vh] flex flex-col p-10 justify-center items-center">
            <h1 className="text-center text-[7em] uppercase items-center  weight-1000   ">
              Some Really Catchy Text That Gains Attention
            </h1>
            <h2>Jozef Antony Neelamkavil</h2>
            <h2>Developer.Designer.Creator</h2>
          </div>
        </Parallax>
        <Parallax speed={10}>
          {' '}
          <StarsCanvas />
          <div className="grid grid-cols-2 ">
            <Parallax speed={40}>
              <ComputersCanvas />
            </Parallax>
            <Parallax speed={-10}>
              <div className="px-5 text-3xl selection:text-[#0e0d0d] selection:bg-[#ead2ab]">
                <p className="text-[2em] ">
                  Hi, I'm <span className="underline underline-offset-4">Jozef Antony</span>
                </p>
                <p>
                  <br />
                  I'm a dedicated and skilled Full Stack Developer, I specialize in developing cutting-edge applications
                  and websites that are both efficient and visually stunning. With a passion for programming and a year
                  of experience under my belt, I'm eager to collaborate and innovate on new projects
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
      </ParallaxProvider>
    </div>
  );
}

export default App
