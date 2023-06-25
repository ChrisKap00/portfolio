import React, { Suspense } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../../CanvasLoader/CanvasLoader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([require(`../../../assets/images/tech/${imgUrl}`)]);

  return (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={2} scale={0.8}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ffffdd" polygonOffsetFactor={-5} flatShading />
        <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ technology }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: !matches ? "150px" : "100px",
        height: !matches ? "150px" : "100px",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={technology.icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
