import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const useCodes = () => {
  const codes = useRef(new Set());

  useEffect(() => {
    const onKeyDown = (e) => codes.current.add(e.code);
    const onKeyUp = (e) => codes.current.delete(e.code);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return codes;
};

export const CAMERA_HEIGHT = 4;
export const WALKING_SPEED = 3;
export const FORWARD_BOUND = 3.35;
export const BACKWARD_BOUND = -3.3;
export const LEFT_BOUND = -2.2;
export const RIGHT_BOUND = 3.4;
export const DESK_COLLIDER = {
  top: 3.15,
  bottom: 0.3,
  right: 3.25,
  left: -1.7,
};
export const CHAIR_COLLIDER = {
  top: 4,
  bottom: 2.5,
  right: 2.3,
  left: -0.5,
};

function PlayerMoveControls({ allowControls }) {
  const vec = new Vector3();
  const { camera } = useThree();
  const code = useCodes();
  const variableHeightDirectionUp = useRef(true);

  const isInCollider = (position, collider) => {
    if (
      position.x < collider.bottom ||
      position.x > collider.top ||
      position.z < collider.left ||
      position.z > collider.right
    ) {
      return false;
    }
    return true;
  };

  const moveForward = (distance, heightOffset) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    vec.crossVectors(camera.up, vec);
    const position = camera.position.clone();
    position.addScaledVector(vec, distance);
    const inCollider =
      isInCollider(position, DESK_COLLIDER) ||
      isInCollider(position, CHAIR_COLLIDER);
    if (inCollider === false) {
      camera.position.addScaledVector(vec, distance);
    }

    if (distance < 0) return;

    if (
      camera.position.x > FORWARD_BOUND ||
      camera.position.x < BACKWARD_BOUND ||
      camera.position.z > RIGHT_BOUND ||
      camera.position.z < LEFT_BOUND ||
      inCollider === true
    ) {
      return;
    }

    if (camera.position.y > CAMERA_HEIGHT + 0.1) {
      variableHeightDirectionUp.current = false;
    }
    if (camera.position.y < CAMERA_HEIGHT) {
      variableHeightDirectionUp.current = true;
    }

    if (variableHeightDirectionUp.current === true) {
      camera.position.addScaledVector(camera.up, heightOffset / 2);
    } else {
      camera.position.addScaledVector(camera.up, -heightOffset / 2);
    }
  };

  const moveRight = (distance) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    const position = camera.position.clone();
    position.addScaledVector(vec, distance);
    if (
      !(
        isInCollider(position, DESK_COLLIDER) ||
        isInCollider(position, CHAIR_COLLIDER)
      )
    ) {
      camera.position.addScaledVector(vec, distance);
    }
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
