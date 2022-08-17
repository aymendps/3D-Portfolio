import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Euler } from "three";
import { deg2rad, rad2deg } from "../utils";

const euler = new Euler(0, 0, 0, "YXZ");

function PlayerLookControls({ allowControls }) {
  const { camera, gl } = useThree();

  const MAX_X_ROTATION = 45;

  useEffect(() => {
    const state = {
      drag: false,
      prev: { screenX: null, screenY: null },
    };
    // gl.domElement.style.cursor = "grab";
    const onMouseDown = (e) => {
      if (!allowControls.current) return;

      state.drag = true;
      e.target.style.cursor = "grabbing";
      e.target.setPointerCapture(e.pointerId);
      state.prev.screenX = e.screenX;
      state.prev.screenY = e.screenY;
    };
    const onMouseUp = () => {
      state.drag = false;
      gl.domElement.style.cursor = "grab";
    };
    const onMouseMove = (e) => {
      if (!allowControls.current) return;

      if (state.drag) {
        const dx = e.screenX - state.prev.screenX;
        const dy = e.screenY - state.prev.screenY;
        euler.setFromQuaternion(camera.quaternion);
        euler.y -= dx * 0.002;
        euler.x -= dy * 0.002;
        const degreeX = rad2deg(euler.x);
        euler.x =
          degreeX > 0
            ? deg2rad(Math.min(degreeX, MAX_X_ROTATION))
            : deg2rad(Math.max(degreeX, -MAX_X_ROTATION));
        camera.quaternion.setFromEuler(euler);
      }
      state.prev.screenX = e.screenX;
      state.prev.screenY = e.screenY;
    };
    gl.domElement.addEventListener("mousemove", onMouseMove);
    gl.domElement.addEventListener("mousedown", onMouseDown);
    gl.domElement.addEventListener("mouseup", onMouseUp);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera, gl]);
  return null;
}

export default PlayerLookControls;
