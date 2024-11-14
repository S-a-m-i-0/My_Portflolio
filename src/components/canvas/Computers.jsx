import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computer = ({ position, rotation }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene.clone()} // Clone the model for each instance
      scale={2.5}
      position={position}
      rotation={rotation}
    />
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* Multiple Clones of the Same Model */}
        <Computer position={[0, 0, 0]} rotation={[0, 0, 0]} />
    

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
