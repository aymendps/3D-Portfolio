import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, Stars } from "@react-three/drei";
import Ground from "./Ground";
import PlayerCamera from "./PlayerCamera";
import CustomLoader from "./CustomLoader";
import PlayerMoveControls from "./PlayerMoveControls";

function MainCanvas() {
  return (
    <>
      <div className="main-canvas-container">
        <Canvas>
          <Suspense fallback={<CustomLoader />}>
            <PlayerCamera />
            <PlayerMoveControls />
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
