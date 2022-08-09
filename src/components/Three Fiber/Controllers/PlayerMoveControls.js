import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const useCodes = () => {
  const codes = useRef(new Set());

  useEffect(() => {
    const onKeyDown = (e) => codes.current.add(e.code);
    const onKeyUp = (e) => codes.current.delete(e.code);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return codes;
};

function PlayerMoveControls({ allowControls }) {
  const vec = new Vector3();
  const { camera } = useThree();
  const code = useCodes();
  const offsetHeightUp = useRef(true);

  // const RUNNING_SPEED = 20;
  const CAMERA_HEIGHT = 4;
  const WALKING_SPEED = 3;

  const moveForward = (distance, heightOffset) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    vec.crossVectors(camera.up, vec);
    camera.position.addScaledVector(vec, distance);

    if (distance < 0) return;

    if (camera.position.y > CAMERA_HEIGHT + 0.1) {
      offsetHeightUp.current = false;
    }
    if (camera.position.y < CAMERA_HEIGHT) {
      offsetHeightUp.current = true;
    }
    if (offsetHeightUp.current === true) {
      camera.position.addScaledVector(camera.up, heightOffset / 2);
    } else {
      camera.position.addScaledVector(camera.up, -heightOffset / 2);
    }
  };

  const moveRight = (distance) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    camera.position.addScaledVector(vec, distance);
  };

  useFrame((_, delta) => {
    if (allowControls.current === false) return;

    const speed = WALKING_SPEED;
    if (!(code.current.has("KeyW") && code.current.has("KeyS"))) {
      if (code.current.has("KeyW")) moveForward(delta * speed, delta);
      if (code.current.has("KeyS")) moveForward((-delta * speed) / 1.5, delta);
    }
    if (!(code.current.has("KeyA") && code.current.has("KeyD"))) {
      if (code.current.has("KeyA")) moveRight(-delta * speed);
      if (code.current.has("KeyD")) moveRight(delta * speed);
    }
  });

  return null;
}

export default PlayerMoveControls;
