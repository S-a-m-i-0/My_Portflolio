// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = ({ isMobile }) => {
//   const earth = useGLTF("./planet/scene.gltf");

//   return (
//     <mesh>
//       <primitive
//         object={earth.scene}
//         scale={isMobile ? 0.3 : 2} // Adjusted scale for mobile view
//         position-y={isMobile ? -0.2 : -1} // Adjusted position for mobile view
//         rotation-y={0}
//       />
//     </mesh>
//   );
// };

// const EarthCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of `isMobile`
//     setIsMobile(mediaQuery.matches);

//     // Update `isMobile` when the media query status changes
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: isMobile ? 25 : 45, // Adjusted field of view for mobile
//         near: 0.01,
//         far: 100,
//         position: isMobile ? [0, 0, 3] : [-4, 3, 6], // Adjusted camera position for mobile
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth isMobile={isMobile} />
//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  // Clone the scene once available
  const scene = useMemo(() => earth.scene.clone(), [earth.scene]);

  // Rotate the earth model continuously
  useFrame((state, delta) => {
    scene.rotation.y += delta * 0.2; // Adjust speed as needed
  });

  return (
    <mesh>
      <primitive
        object={scene}
        scale={isMobile ? 0.27 : 2}
        position-y={isMobile ? -0.2 : -1}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 490px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="always" // Ensures continuous rotation
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: isMobile ? 25 : 45,
        near: 0.01,
        far: 100,
        position: isMobile ? [0, 0, 3] : [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={false} // Prevent user rotation
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
