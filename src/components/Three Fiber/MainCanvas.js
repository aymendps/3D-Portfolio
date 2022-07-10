import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei/core";
import PlayerCamera from "./PlayerCamera";
import CustomLoader from "./CustomLoader";
import PlayerMoveControls from "./PlayerMoveControls";
import WindowLight from "./WindowLight";
import Office from "./Objects/Office";
import GlobalSound from "./GlobalSound";
import { OrbitControls } from "@react-three/drei";

function MainCanvas() {
  // eslint-disable-next-line no-unused-vars
  const [isDev, setIsDev] = useState(true);
  return (
    <div className="fixed w-full h-[100vh] top-0 left-0 bg-gray-900">
      <Canvas>
        <GlobalSound url="/assets/audio/rain_medium.ogg" volume={0.3} />
        <Suspense fallback={null}>
          <WindowLight />
          {isDev ? <OrbitControls /> : <PlayerMoveControls />}
          <PlayerCamera />
          <Office />
        </Suspense>
      </Canvas>
      <CustomLoader url />
    </div>
  );
}

export default MainCanvas;
