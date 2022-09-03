/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: shadowowy (https://sketchfab.com/shadowowy)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/old-tv-7cef86bade2b447d841c333bcab9287c
title: Old TV
*/

import { useGLTF } from "@react-three/drei";

export default function OldTV(props) {
  const { nodes, materials } = useGLTF("/assets/models/old_tv/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
            <mesh
              geometry={nodes.TV_TV_0.geometry}
              material={materials.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
