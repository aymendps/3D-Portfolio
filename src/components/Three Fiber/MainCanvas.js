import React from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";

function MainCanvas() {
  const [cameraPosition, setCameraPosition] = React.useState([0, 0, 5]);
  const deg2rad = (degrees) => degrees * (Math.PI / 180);
  const CameraHook = () => {
    const { camera } = useThree();
    alert(JSON.stringify(camera.position));
    return <></>;
  };
  return (
    <>
      <div className="main-canvas-container">
        <Canvas
          camera={{
            rotation: [deg2rad(-10), 0, 0],
            position: [0, 10, 0],
          }}
        >
          <CameraHook />
          <Stars />
          <ambientLight intensity={1} />
          <mesh rotation={[deg2rad(-90), 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[400, 400]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default MainCanvas;
