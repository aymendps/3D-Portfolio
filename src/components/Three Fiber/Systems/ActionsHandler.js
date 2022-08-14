import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Euler } from "three";
import { CAMERA_HEIGHT } from "../Controllers/PlayerMoveControls";
import { QUESTS } from "../MainCanvas";
import { deg2rad } from "../utils";

function ActionsHandler({
  allowControls,
  activeQuestsRef,
  addQuest,
  completeQuest,
  setMessage,
  eKeyAction,
}) {
  const { camera } = useThree();
  const initialPosition = useRef(null);
  const initialRotation = useRef(null);

  const TRIGGERS_CONFIG = {
    desk: {
      value: false,
      boundaries: { maxX: 0.3, minX: -0.05, maxZ: 2.5, minZ: -0.5 },
      message: "Press E to sit",
      action: () => {
        setMessage({ content: "" });
        allowControls.current = false;
        camera.position.set(4, CAMERA_HEIGHT, 0.95);
        const euler = new Euler(0, 0, 0, "YXZ").setFromQuaternion(
          camera.quaternion
        );
        euler.x = deg2rad(-40);
        euler.y = Math.PI / 2;
        camera.quaternion.setFromEuler(euler);
        setTimeout(() => {
          completeQuest(QUESTS.desk);
        }, 500);
      },
    },
  };
  const triggers = useRef(TRIGGERS_CONFIG);

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
    if (initialPosition.current === null) {
      initialPosition.current = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
    }
    if (
      initialRotation.current === null ||
      activeQuestsRef.current.includes(QUESTS.tutorialWalk)
    ) {
      initialRotation.current = {
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z,
      };
    }

    if (
      isDifferent(initialPosition.current, camera.position) &&
      activeQuestsRef.current.includes(QUESTS.tutorialWalk)
    ) {
      completeQuest(QUESTS.tutorialWalk);
      addQuest(QUESTS.tutorialLook);
      setMessage({
        content: "Hold the mouse's left button and drag to look around",
      });
    }

    if (
      isDifferent(initialRotation.current, camera.rotation) &&
      activeQuestsRef.current.includes(QUESTS.tutorialLook)
    ) {
      completeQuest(QUESTS.tutorialLook);
      setMessage({ content: "" });
      addQuest(QUESTS.desk);
      questStage.current++;
    }
  };

  const checkTrigger = (trigger) => {
    if (isInTrigger(trigger)) {
      if (trigger.value === false) {
        trigger.value = true;
        setMessage({ content: trigger.message });
        eKeyAction.current = trigger.action;
      }
    } else if (trigger.value === true) {
      trigger.value = false;
      setMessage({ content: "" });
      eKeyAction.current = null;
    }
  };

  const handleTriggers = () => {
    checkTrigger(triggers.current.desk);
  };

  useEffect(() => {
    addQuest(QUESTS.tutorialWalk);
    setMessage({ content: "Use WASD keys to move" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((_, delta) => {
    if (questStage.current === 0) {
      handleTutorialQuests();
    } else {
      handleTriggers();
    }
  });

  return null;
}

export default ActionsHandler;
