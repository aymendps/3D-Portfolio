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
  const triggers = useRef({
    desk: {
      value: false,
      boundaries: { maxX: Infinity, minX: 0.15, maxZ: 2.5, minZ: -0.5 },
    },
  });

  const questStage = useRef(0);

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

  const isInTrigger = (trigger) => {
    const { maxX, minX, maxZ, minZ } = trigger.boundaries;
    if (
      camera.position.x > maxX ||
      camera.position.x < minX ||
      camera.position.z > maxZ ||
      camera.position.z < minZ
    ) {
      return false;
    }
    return true;
  };

  const handleTutorialQuests = () => {
    if (questStage.current !== 0) return;

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
      addQuest("Look around your office");
      setMessage({
        content: "Hold the mouse's left button and drag to look around",
      });
    }

    if (
      isDifferent(initialRotation.current, camera.rotation) &&
      activeQuestsRef.current.includes("Look around your office")
    ) {
      completeQuest("Look around your office");
      setMessage({ content: "" });
      addQuest("Sit at your desk");
      questStage.current++;
    }
  };

  const handleTriggers = () => {
    //console.log(camera.position.toArray());
    if (isInTrigger(triggers.current.desk)) {
      if (triggers.current.desk.value === false) {
        triggers.current.desk.value = true;
        console.log("enter desk trigger");
      }
    } else if (triggers.current.desk.value === true) {
      triggers.current.desk.value = false;
      console.log("exit desk trigger");
    }
  };

  useEffect(() => {
    addQuest("Walk around your office");
    setMessage({ content: "Use WASD keys to move" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((_, delta) => {
    handleTutorialQuests();
    handleTriggers();
  });

  return null;
}

export default ActionsIndicator;
