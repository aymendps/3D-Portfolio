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

export const CAMERA_HEIGHT = 4;
export const WALKING_SPEED = 3;
export const FORWARD_BOUND = 0.25;
export const BACKWARD_BOUND = -3.3;
export const LEFT_BOUND = -1.85;
export const RIGHT_BOUND = 3.4;

function PlayerMoveControls({ allowControls }) {
  const vec = new Vector3();
  const { camera } = useThree();
  const code = useCodes();
  const offsetHeightUp = useRef(true);

  const moveForward = (distance, heightOffset) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    vec.crossVectors(camera.up, vec);
    camera.position.addScaledVector(vec, distance);

    if (distance < 0) return;

    if (
      camera.position.x > FORWARD_BOUND ||
      camera.position.x < BACKWARD_BOUND ||
      camera.position.z > RIGHT_BOUND ||
      camera.position.z < LEFT_BOUND
    ) {
      return;
    }

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

  const movementBoundaries = () => {
    if (camera.position.x > FORWARD_BOUND) {
      camera.position.x = FORWARD_BOUND;
    }
    if (camera.position.x < BACKWARD_BOUND) {
      camera.position.x = BACKWARD_BOUND;
    }
    if (camera.position.z > RIGHT_BOUND) {
      camera.position.z = RIGHT_BOUND;
    }
    if (camera.position.z < LEFT_BOUND) {
      camera.position.z = LEFT_BOUND;
    }
  };

  useFrame((_, delta) => {
    if (allowControls.current === false) return;

    const speed = WALKING_SPEED;
    if (!(code.current.has("KeyW") && code.current.has("KeyS"))) {
      if (code.current.has("KeyW")) moveForward(delta * speed, delta);
      if (code.current.has("KeyS")) moveForward((-delta * speed) / 2, delta);
    }
    if (!(code.current.has("KeyA") && code.current.has("KeyD"))) {
      if (code.current.has("KeyA")) moveRight(-delta * speed);
      if (code.current.has("KeyD")) moveRight(delta * speed);
    }

    movementBoundaries();
  });

  return null;
}

export default PlayerMoveControls;
