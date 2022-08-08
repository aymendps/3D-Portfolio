import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { getRandomFloat } from "../utils";

function Rain() {
  const rainRef = useRef();

  useFrame((state, delta) => {
    if (rainRef.current.position.y <= -5) {
      rainRef.current.position.y = 0;
    } else {
      rainRef.current.position.y -= 10 * delta;
    }
  });

  return (
    <group ref={rainRef}>
      {Array.from({ length: 50 }, (_, i) => {
        return (
          <Box
            position={[
              getRandomFloat(6, 8),
              getRandomFloat(5, 10),
              getRandomFloat(0, 2),
            ]}
            args={[0.01, 0.5, 0.01]}
          >
            <meshBasicMaterial color="grey" />
          </Box>
        );
      })}
    </group>
  );
}

export default Rain;
