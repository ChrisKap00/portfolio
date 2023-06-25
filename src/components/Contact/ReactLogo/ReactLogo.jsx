import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../../CanvasLoader/CanvasLoader";

const ReactLogo = () => {
  const logo = useGLTF("./react_logo/scene.gltf");

  return <primitive object={logo.scene} scale={1.1} />;
};

const ReactLogoCanvas = () => {
  return (
    <Canvas shadows frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <directionalLight intensity={0.3} />
        <ReactLogo />
      </Suspense>
    </Canvas>
  );
};

export default ReactLogoCanvas;
