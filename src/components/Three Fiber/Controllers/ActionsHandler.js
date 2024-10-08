import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Euler } from "three";
import { CAMERA_HEIGHT } from "./PlayerMoveControls";
import { QUESTS } from "../MainCanvas";
import { deg2rad } from "../utils";

function ActionsHandler({
  allowControls,
  activeQuestsRef,
  addQuest,
  completeQuest,
  setMessage,
  eKeyAction,
  showDeskMenu,
  getNextMusicTrack,
}) {
  const { camera } = useThree();
  const initialPosition = useRef(null);
  const initialRotation = useRef(null);

  const TRIGGERS_CONFIG = {
    desk: {
      // if value is true, it means player entered trigger last frame
      value: false,
      boundaries: { maxX: 3.35, minX: 3.15, maxZ: 3, minZ: -1.45 },
      message: "Press E to sit",
      action: () => {
        allowControls.current = false;
        camera.position.set(3.7, CAMERA_HEIGHT, 0.9);
        const euler = new Euler(0, 0, 0, "YXZ").setFromQuaternion(
          camera.quaternion
        );
        euler.x = deg2rad(-45);
        euler.y = Math.PI / 2;
        camera.quaternion.setFromEuler(euler);
        showDeskMenu.current = true;
        setMessage({
          content: "Hover & click on a stack to view more\nPress E to stand up",
        });
        eKeyAction.current = TRIGGERS_CONFIG.desk.followUpAction;
        setTimeout(() => {
          if (completeQuest(QUESTS.desk) === true) {
            addQuest(QUESTS.me_portfolio);
            addQuest(QUESTS.me_about);
            addQuest(QUESTS.me_skills);
          }
        }, 300);
      },
      followUpAction: () => {
        allowControls.current = true;
        showDeskMenu.current = false;
        camera.position.set(3.2, CAMERA_HEIGHT, -0.6);
        // const euler = new Euler(0, 0, 0, "YXZ").setFromQuaternion(
        //   camera.quaternion
        // );
        // euler.x = deg2rad(-45);
        // euler.y = Math.PI / 2;
        // camera.quaternion.setFromEuler(euler);
      },
    },
    gramophone: {
      value: false,
      boundaries: {
        maxX: -1.15,
        minX: -3.4,
        maxZ: -0.75,
        minZ: -2.2,
      },
      message: "Press E to switch music track",
      action: () => {
        getNextMusicTrack();
      },
    },
  };
  const triggers = useRef(TRIGGERS_CONFIG);

  const questStage = useRef(0);

  const isDifferent = (vector1, vector2) => {
    return (
      vector1.x !== vector2.x ||
      vector1.y !== vector2.y ||
      vector1.z !== vector2.z
    );
  };

  const isInTrigger = (trigger) => {
    const { maxX, minX, maxZ, minZ } = trigger.boundaries;
    return !(
      camera.position.x > maxX ||
      camera.position.x < minX ||
      camera.position.z > maxZ ||
      camera.position.z < minZ
    );
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
        content: "Hold the mouse's button down and drag to look around",
      });
    }

    if (
      isDifferent(initialRotation.current, camera.rotation) &&
      activeQuestsRef.current.includes(QUESTS.tutorialLook)
    ) {
      completeQuest(QUESTS.tutorialLook);
      setMessage({ content: "Sit at your desk to browse the portfolio" });
      addQuest(QUESTS.desk);
      questStage.current++;
    }
  };

  const checkTrigger = (trigger) => {
    if (isInTrigger(trigger)) {
      if (trigger.value === false) {
        trigger.value = true;
        if (trigger.message) {
          setMessage({ content: trigger.message });
        }
        eKeyAction.current = trigger.action;
      }
    } else if (trigger.value === true) {
      trigger.value = false;
      if (eKeyAction.current === trigger.action) {
        if (trigger.message) {
          setMessage({ content: "" });
        }
        eKeyAction.current = null;
      }
    }
  };

  const handleTriggers = () => {
    checkTrigger(triggers.current.desk);
    checkTrigger(triggers.current.gramophone);
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
