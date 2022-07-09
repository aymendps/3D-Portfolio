import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { deg2rad } from "./utils";

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

function PlayerMoveControls() {
  const vec = new Vector3();
  const { camera } = useThree();
  const code = useCodes();

  const RUNNING_SPEED = 20;
  const WALKING_SPEED = 12;
  const ROTATION_SPEED = 55;

  const moveForward = (distance) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    vec.crossVectors(camera.up, vec);
    camera.position.addScaledVector(vec, distance);
  };

  const moveRight = (distance) => {
    vec.setFromMatrixColumn(camera.matrix, 0);
    camera.position.addScaledVector(vec, distance);
  };

  const lookRight = (speed) => {
    camera.rotateY(deg2rad(-1 * speed));
  };

  const lookLeft = (speed) => {
    camera.rotateY(deg2rad(1 * speed));
  };

  useFrame((_, delta) => {
    const speed = code.current.has("ShiftLeft") ? RUNNING_SPEED : WALKING_SPEED;
    if (code.current.has("KeyW")) moveForward(delta * speed);
    if (code.current.has("KeyA")) moveRight(-delta * speed);
    if (code.current.has("KeyS")) moveForward(-delta * speed);
    if (code.current.has("KeyD")) moveRight(delta * speed);
    if (code.current.has("KeyE")) lookRight(delta * ROTATION_SPEED);
    if (code.current.has("KeyQ")) lookLeft(delta * ROTATION_SPEED);
  });

  return null;
}

export default PlayerMoveControls;
