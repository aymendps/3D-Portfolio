import { useFrame, useThree } from "@react-three/fiber";

function IntroCameraFov({ allowControls, isStarted }) {
  const SPEED = 2;
  const { camera, gl } = useThree();

  useFrame((_, delta) => {
    if (camera.fov <= 65 && isStarted === true) {
      camera.fov += SPEED * delta;
      if (camera.position.y < 4 && camera.fov > 35) {
        camera.position.addScaledVector(camera.up, (SPEED * delta) / 32);
      }
      camera.updateProjectionMatrix();
    } else if (allowControls.current === false) {
      allowControls.current = true;
      gl.domElement.style.cursor = "grab";
    }
  });

  return null;
}

export default IntroCameraFov;
