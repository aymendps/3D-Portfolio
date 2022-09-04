import { useTexture } from "@react-three/drei";

function Sprite({
  url,
  position,
  rotation,
  scale,
  opacity,
  spriteMaterialRef,
  useMeshBasicMaterial,
}) {
  const texture = useTexture(url);
  return (
    <sprite position={position} scale={scale} rotation={rotation}>
      {useMeshBasicMaterial ? (
        <meshBasicMaterial
          opacity={opacity}
          attach="material"
          map={texture}
          ref={spriteMaterialRef}
        />
      ) : (
        <spriteMaterial
          opacity={opacity}
          attach="material"
          map={texture}
          ref={spriteMaterialRef}
        />
      )}
    </sprite>
  );
}

export default Sprite;
