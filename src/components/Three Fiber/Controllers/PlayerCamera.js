import { PerspectiveCamera } from "@react-three/drei";
import React from "react";

function PlayerCamera() {
  return (
    <PerspectiveCamera
      makeDefault
      fov={0} // from 1 to 65
      aspect={window.innerWidth / window.innerHeight}
      near={1}
      far={1000}
      rotation={[0, -Math.PI / 2, 0]}
      position={[-3, 3, 0.9]}
    />
  );
}

export default PlayerCamera;
