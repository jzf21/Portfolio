import React, { Suspense, useEffect, useState,useRef } from 'react';
import { Canvas,useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useProgress } from '@react-three/drei';


import CanvasLoader from '../loader';

const Computers = ({ isMobile }) => {
  const [mousePos, setMousePos] = useState([0, 0]);

  const { scene } = useGLTF('./eyebot/eyebot.gltf');
  const meshRef = useRef();
    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePos([e.clientX, e.clientY]);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    // useFrame(() => {
    //   if (meshRef.current) {
    //     const mouseX = mousePos[0] / window.innerWidth;
    //     const mouseY = mousePos[1] / window.innerHeight;
    //     meshRef.current.position.x = mouseX * 8 - 4;
    //     meshRef.current.position.y = -mouseY * 6 + 3;
    //   }
    // });
    // useFrame(({ mouse }) => {
    //   if (meshRef.current) {
    //     meshRef.current.lookAt(
    //       mouse.x * 20,
    //       mouse.y * 10,
    //       meshRef.current.position.z
    //     );
    //   }
    // });


  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={5} groundColor="black" />
      <spotLight position={[0, 0, 10]} angle={10} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 1.5}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0.0, -0.0, -0.0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const { progress } = useProgress();

  return (
    <Canvas
      style={{ height: '100vh' }}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [30, -10, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader progress={progress} />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
         
          minPolarAngle={-Math.PI/2 }
          maxPolarAngle={Math.PI/2 }
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      
    </Canvas>
  );
};

export default ComputersCanvas;
