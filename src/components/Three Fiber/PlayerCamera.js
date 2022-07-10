import { PerspectiveCamera } from "@react-three/drei";
import React from "react";

function PlayerCamera() {
  return (
    <PerspectiveCamera
      makeDefault
      fov={60}
      aspect={window.innerWidth / window.innerHeight}
      near={1}
      far={1000}
      rotation={[0, 0, 0]}
      position={[0, 3, 0]}
    />
  );
}

export default PlayerCamera;
