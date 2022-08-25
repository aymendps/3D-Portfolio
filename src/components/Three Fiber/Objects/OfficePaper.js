import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Sprite from "./Sprite";

function OfficePaper({
  showDeskMenu,
  setShowThisPage,
  node,
  position,
  material,
  spriteURL,
  spritePosition,
  gl,
  completeQuest,
  allowActionControls,
}) {
  const spriteMaterialRef = useRef();
  const isHovered = useRef(false);
  const FADE_SPEED = 5;

  useFrame((_, delta) => {
    if (!spriteMaterialRef.current) return;

    if (showDeskMenu.current === false) {
      spriteMaterialRef.current.opacity = 0;
      isHovered.current = false;
      return;
    }

    if (isHovered.current === true) {
      if (spriteMaterialRef.current.opacity < 1) {
        const newOpacity =
          spriteMaterialRef.current.opacity + delta * FADE_SPEED > 1
            ? 1
            : spriteMaterialRef.current.opacity + delta * FADE_SPEED;
        spriteMaterialRef.current.opacity = newOpacity;
      }
    } else {
      if (spriteMaterialRef.current.opacity > 0) {
        const newOpacity =
          spriteMaterialRef.current.opacity - delta * FADE_SPEED < 0
            ? 0
            : spriteMaterialRef.current.opacity - delta * FADE_SPEED;
        spriteMaterialRef.current.opacity = newOpacity;
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        geometry={node}
        material={material}
        onPointerEnter={(e) => {
          if (showDeskMenu.current) {
            e.object.material.emissive.setStyle("rgb(120,120,120)");
            e.object.material.emissiveIntensity = 1.5;
            gl.domElement.style.cursor = "pointer";
            isHovered.current = true;
          }
        }}
        onPointerLeave={(e) => {
          if (showDeskMenu.current) {
            e.object.material.emissive.set("black");
            e.object.material.emissiveIntensity = 1;
            gl.domElement.style.cursor = "grab";
            isHovered.current = false;
          }
        }}
        onClick={() => {
          allowActionControls.current = false;
          isHovered.current = false;
          gl.domElement.style.cursor = "default";
          if (completeQuest) {
            completeQuest();
          }
          setShowThisPage();
        }}
      ></mesh>
      <Sprite
        url={spriteURL}
        position={spritePosition}
        scale={0.8}
        opacity={0}
        spriteMaterialRef={spriteMaterialRef}
      />
    </group>
  );
}

export default OfficePaper;
