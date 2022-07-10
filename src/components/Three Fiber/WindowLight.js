// import { useFrame } from "@react-three/fiber";
// import { Color } from "three";
// import { useHelper } from "@react-three/drei/core";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
// import { PointLightHelper } from "three";
import { useRef } from "react";

function WindowLight() {
  const rectAreaLightRef = useRef(null);
  const pointLightRef = useRef(null);

  // useHelper(rectAreaLightRef, RectAreaLightHelper, "#222222");
  // useHelper(pointLightRef, PointLightHelper, 1, "red");

  return (
    <>
      {
        <rectAreaLight
          position={[5.15, 4.2, 0.9]}
          rotation={[0, Math.PI / 2, 0]}
          width={2.55}
          height={4}
          intensity={10}
          ref={rectAreaLightRef}
          color={"pink"}
        />
      }
      <pointLight
        position={[3, 4.2, 0.9]}
        intensity={0.2}
        ref={pointLightRef}
        color={"pink"}
      />
    </>
  );
}

export default WindowLight;
