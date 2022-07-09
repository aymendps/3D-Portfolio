import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
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
            <PlayerMoveControls />
            <PlayerCamera />
            <ambientLight intensity={1.5} />
            <Stars radius={500} />
            <Ground />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;
