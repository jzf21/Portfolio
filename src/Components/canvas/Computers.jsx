import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useProgress } from '@react-three/drei';

import CanvasLoader from '../loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('./room/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
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
         
          minPolarAngle={-Math.PI }
          maxPolarAngle={Math.PI }
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      
    </Canvas>
  );
};

export default ComputersCanvas;
