import { useFrame, useThree } from "@react-three/fiber";

function IntroCameraFov({
  allowMoveControls,
  allowActionControls,
  startIntro,
  setFinishedIntro,
}) {
  const SPEED = 2;
  const { camera, gl } = useThree();

  useFrame((_, delta) => {
    if (camera.fov < 65 && startIntro === true) {
      camera.fov += SPEED * delta;
      if (camera.position.y < 4 && camera.fov > 35) {
        camera.position.addScaledVector(camera.up, (SPEED * delta) / 30);
      }
      camera.updateProjectionMatrix();
    } else if (allowMoveControls.current === false && startIntro === true) {
      camera.fov = 65;
      camera.position.y = 4;
      allowMoveControls.current = true;
      allowActionControls.current = true;
      gl.domElement.style.cursor = "grab";
      setFinishedIntro(true);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}

export default IntroCameraFov;
