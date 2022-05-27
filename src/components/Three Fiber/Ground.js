import { useLoader } from "@react-three/fiber";
import React from "react";
import { Vector2 } from "three";
import { TextureLoader } from "three";
import { deg2rad } from "./utils";
import * as THREE from "three";

function Ground() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      "textures/Stone_Base_Color.png",
      "textures/Stone_Height.png",
      "textures/Stone_Normal.png",
      "textures/Stone_Roughness.png",
      "textures/Stone_Ambient_Occlusion.png",
    ]
  );
  const setupMap = (map) => {
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.repeat = new Vector2(32, 32);
  };
  setupMap(colorMap);
  setupMap(displacementMap);
  setupMap(normalMap);
  setupMap(roughnessMap);
  setupMap(aoMap);
  return (
    <mesh rotation={[deg2rad(-90), 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[400, 400]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}

export default Ground;
