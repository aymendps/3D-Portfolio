import { PerspectiveCamera } from "@react-three/drei";
import React from "react";

function PlayerCamera() {
  return (
    <PerspectiveCamera
      makeDefault
      fov={50}
      rotation={[0, 0, 0]}
      position={[0, 5, 0]}
    />
  );
}

export default PlayerCamera;
