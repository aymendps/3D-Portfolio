import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import PlayerCamera from "./PlayerCamera";
import CustomLoader from "./CustomLoader";
import PlayerMoveControls from "./PlayerMoveControls";

function MainCanvas() {
  return (
    <>
      <div className="w-full h-[100vh] fixed top-0 left-0 bg-black">
        <Canvas>
          <Suspense fallback={<CustomLoader />}>
            <PlayerMoveControls />
            <PlayerCamera />
            <ambientLight intensity={1} />
            <Stars radius={500} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;
