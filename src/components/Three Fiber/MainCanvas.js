import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Sky, Stars, useProgress } from "@react-three/drei";
import Ground from "./Ground";

function MainCanvas() {
  function CustomLoader() {
    const { progress } = useProgress();
    return (
      <Html>
        <div className="main-canvas-loading-screen">
          <p>Loading.. {progress}%</p>
        </div>
      </Html>
    );
  }
  return (
    <>
      <div className="main-canvas-container">
        <Canvas
          camera={{
            fov: 50,
            rotation: [0, 0, 0],
            position: [0, 7, 0],
          }}
        >
          <Suspense fallback={<CustomLoader />}>
            <ambientLight intensity={3} />
            <Sky sunPosition={[0, 0, 0]} />
            <Stars />
            <Ground />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;
