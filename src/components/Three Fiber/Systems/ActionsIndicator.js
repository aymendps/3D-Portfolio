import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function ActionsIndicator({
  activeQuestsRef,
  addQuest,
  completeQuest,
  setMessage,
}) {
  const { camera } = useThree();
  const initialPosition = useRef(null);
  const initialRotation = useRef(null);

  const isDifferent = (vector1, vector2) => {
    if (
      vector1.x !== vector2.x ||
      vector1.y !== vector2.y ||
      vector1.z !== vector2.z
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    addQuest("Walk around your office");
    setMessage({ content: "Use WASD keys to move" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((_, delta) => {
    if (initialPosition.current === null) {
      initialPosition.current = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
    }
    if (
      initialRotation.current === null ||
      activeQuestsRef.current.includes("Walk around your office")
    ) {
      initialRotation.current = {
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z,
      };
    }

    if (
      isDifferent(initialPosition.current, camera.position) &&
      activeQuestsRef.current.includes("Walk around your office")
    ) {
      completeQuest("Walk around your office");
      setMessage({ content: "" });
      addQuest("Look around your office");
      setTimeout(() => {
        setMessage({
          content: "Hold the mouse's left button and drag to look around",
        });
      }, 1000);
    }

    if (
      isDifferent(initialRotation.current, camera.rotation) &&
      activeQuestsRef.current.includes("Look around your office")
    ) {
      completeQuest("Look around your office");
      setMessage({ content: "" });
      addQuest("Walk and sit at your desk");
    }
  });

  return null;
}

export default ActionsIndicator;
