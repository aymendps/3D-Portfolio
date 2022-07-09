import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function DetectiveOffice() {
  const gltf = useLoader(GLTFLoader, "/assets/models/office/scene.gltf");
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

export default DetectiveOffice;
