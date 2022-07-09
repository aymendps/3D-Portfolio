import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import PlayerCamera from "./PlayerCamera";
import CustomLoader from "./CustomLoader";
import PlayerMoveControls from "./PlayerMoveControls";
import DetectiveOffice from "./Objects/DetectiveOffice";
import WindowLight from "./WindowLight";

function MainCanvas() {
  return (
    <>
      <div className="w-full h-[100vh] fixed top-0 left-0 bg-gray-900">
        <Canvas>
          <Suspense fallback={<CustomLoader />}>
            <PlayerCamera />
            <WindowLight />
            <OrbitControls />
            <DetectiveOffice />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;
