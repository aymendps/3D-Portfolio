import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei/core";
import PlayerCamera from "./PlayerCamera";
import CustomLoader from "./CustomLoader";
import PlayerMoveControls from "./PlayerMoveControls";
import WindowLight from "./WindowLight";
import Office from "./Objects/Office";

function MainCanvas() {
  return (
    <>
      <div className="w-full h-[100vh] fixed top-0 left-0 bg-gray-900">
        <Canvas>
          <Suspense fallback={<CustomLoader />}>
            <Office />
          </Suspense>
          <WindowLight />
          <PlayerMoveControls />
          <PlayerCamera />
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;
