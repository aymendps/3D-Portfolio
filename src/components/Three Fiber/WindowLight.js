// import { useRef } from "react";
// import { useHelper } from "@react-three/drei/core";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
// import { DirectionalLightHelper } from "three";

function WindowLight() {
  //   const rectAreaLightRef = useRef(null);
  //   useHelper(rectAreaLightRef, RectAreaLightHelper, "#222222");
  //   const directionalLightRef = useRef(null);
  //   useHelper(directionalLightRef, DirectionalLightHelper, "red");
  const lightColor = "pink";

  return (
    <>
      <rectAreaLight
        position={[5.15, 4.2, 0.9]}
        rotation={[0, Math.PI / 2, 0]}
        width={2.55}
        height={4}
        color={lightColor}
        intensity={5}
        // ref={rectAreaLightRef}
      />
      <directionalLight
        position={[5.15, 4.2, 0.9]}
        color={lightColor}
        intensity={0.1}
        // ref={directionalLightRef}
      />
    </>
  );
}

export default WindowLight;
