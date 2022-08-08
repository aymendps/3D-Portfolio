import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { deg2rad } from "../utils";

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

function PlayerMoveControls() {
  const vec = new Vector3();
  const { camera } = useThree();
  const code = useCodes();
  const offsetHeightUp = useRef(true);

  // const RUNNING_SPEED = 20;
  const WALKING_SPEED = 3;
  const ROTATION_SPEED = 55;

  const moveForward = (distance, heightOffset) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    vec.crossVectors(camera.up, vec);

    camera.position.addScaledVector(vec, distance);
    if (camera.position.y > 4.1) {
      offsetHeightUp.current = false;
    }
    if (camera.position.y < 4) {
      offsetHeightUp.current = true;
    }
    if (offsetHeightUp.current === true) {
      camera.position.addScaledVector(camera.up, heightOffset / 2);
    } else {
      camera.position.addScaledVector(camera.up, -heightOffset / 2);
    }
  };

  const moveRight = (distance, heightOffset) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    camera.position.addScaledVector(vec, distance);

    if (camera.position.y > 4.1) {
      offsetHeightUp.current = false;
    }
    if (camera.position.y < 4) {
      offsetHeightUp.current = true;
    }
    if (offsetHeightUp.current === true) {
      camera.position.addScaledVector(camera.up, heightOffset / 8);
    } else {
      camera.position.addScaledVector(camera.up, -heightOffset / 8);
    }
  };

  const lookRight = (speed) => {
    camera.rotateY(deg2rad(-1 * speed));
  };

  const lookLeft = (speed) => {
    camera.rotateY(deg2rad(1 * speed));
  };

  useFrame((_, delta) => {
    const speed = WALKING_SPEED;
    if (code.current.has("KeyW")) moveForward(delta * speed, delta);
    if (code.current.has("KeyA")) moveRight(-delta * speed, delta);
    if (code.current.has("KeyS")) moveForward(-delta * speed, delta);
    if (code.current.has("KeyD")) moveRight(delta * speed, delta);
    if (code.current.has("KeyE")) lookRight(delta * ROTATION_SPEED);
    if (code.current.has("KeyQ")) lookLeft(delta * ROTATION_SPEED);
  });

  return null;
}

export default PlayerMoveControls;
