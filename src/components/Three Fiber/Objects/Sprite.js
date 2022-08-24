import { useTexture } from "@react-three/drei";

function Sprite({ url, position, scale, opacity, spriteMaterialRef }) {
  const texture = useTexture(url);
  return (
    <sprite position={position} scale={scale}>
      <spriteMaterial
        opacity={opacity}
        attach="material"
        map={texture}
        ref={spriteMaterialRef}
      />
    </sprite>
  );
}

export default Sprite;
