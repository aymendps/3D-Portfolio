import { useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei/core";
import PlayerCamera from "./Controllers/PlayerCamera";
import WindowLight from "./Objects/WindowLight";
import Office from "./Objects/Office";
import { OrbitControls } from "@react-three/drei";
import PlayerMoveControls from "./Controllers/PlayerMoveControls";
import Rain from "./Objects/Rain";
import IntroCameraFov from "./Controllers/IntroCameraFov";
import PlayerLookControls from "./Controllers/PlayerLookControls";
import CustomLoader from "./CustomLoader";
import GlobalSound from "./Audio/GlobalSound";
import GameplayUI from "./UI/GameplayUI";
import ActionsHandler from "./Systems/ActionsHandler";
import PlayerActionControls from "./Controllers/PlayerActionControls";

export const QUESTS = {
  tutorialWalk: "Walk around your office",
  tutorialLook: "Look around you",
  desk: "Sit at your desk",
  me_about: "Have a look at the 'About me' stack",
  me_skills: "Have a look at the 'My skills' stack",
  me_portfolio: "Have a look at the 'My portfolio' stack",
  me_contact: "Have a look at the 'Contact me' stack",
};

function MainCanvas({ isClicked, setStopParticles }) {
  const [isDev] = useState(false);

  const [isStarted, setIsStarted] = useState(false);
  const [startIntro, setStartIntro] = useState(false);
  const [startMusic, setStartMusic] = useState(false);
  const [finishedIntro, setFinishedIntro] = useState(false);
  const allowMoveControls = useRef(false);
  const allowActionControls = useRef(false);

  const [musicVolume, setMusicVolume] = useState(0.2);
  const [message, setMessage] = useState({});

  const [activeQuests, setActiveQuests] = useState([]);
  const activeQuestsRef = useRef([]);
  const eKeyAction = useRef(null);

  const showDeskMenu = useRef(false);

  const [showThisPage, setShowThisPage] = useState("");

  const addQuest = (quest) => {
    if (!activeQuests.includes(quest)) {
      setActiveQuests((current) => [...current, quest]);
    }
  };

  const completeQuest = (quest) => {
    setActiveQuests((current) =>
      current.filter((_, index) => {
        return index !== current.indexOf(quest);
      })
    );
    if (activeQuestsRef.current.indexOf(quest) !== -1) {
      activeQuestsRef.current.splice(activeQuestsRef.current.indexOf(quest), 1);
      return true;
    } else {
      return false;
    }
  };

  const rainAudioRef = useCallback(
    (node) => {
      if (node !== null && isClicked === true) {
        node.volume = musicVolume;
        if (musicVolume === 0) {
          node.pause();
        } else {
          node.play();
        }
      }
    },
    [isClicked, musicVolume]
  );

  const thunderAudioRef = useRef(null);

  useEffect(() => {
    if (musicVolume === 0) {
      thunderAudioRef.current.pause();
      thunderAudioRef.current.currentTime = 0;
    } else {
      thunderAudioRef.current.volume = musicVolume;
    }
  }, [musicVolume]);

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <audio
        loop
        type="audio"
        src="/assets/audio/rain_medium.ogg"
        ref={rainAudioRef}
      />
      <audio
        type="audio"
        src="/assets/audio/thunder.mp3"
        ref={thunderAudioRef}
      />
      <div className="fixed w-full h-[100vh] top-0 left-0 z-10">
        {!finishedIntro ? (
          <CustomLoader
            isStarted={isStarted}
            setIsStarted={setIsStarted}
            startIntro={startIntro}
            setStartIntro={setStartIntro}
            setStartMusic={setStartMusic}
            setStopParticles={setStopParticles}
          />
        ) : (
          <GameplayUI
            musicVolume={musicVolume}
            setMusicVolume={setMusicVolume}
            message={message}
            setMessage={setMessage}
            activeQuests={activeQuests}
            activeQuestsRef={activeQuestsRef}
            setActiveQuests={setActiveQuests}
            showThisPage={showThisPage}
            setShowThisPage={setShowThisPage}
          />
        )}
        {isStarted && (
          <Canvas>
            <Office
              showDeskMenu={showDeskMenu}
              setShowThisPage={setShowThisPage}
              completeQuest={completeQuest}
              allowActionControls={allowActionControls}
            />
            <WindowLight
              startIntro={startIntro}
              thunderAudioRef={thunderAudioRef}
              musicVolume={musicVolume}
            />
            {isDev ? (
              <OrbitControls />
            ) : (
              <>
                <PlayerMoveControls allowControls={allowMoveControls} />
                <PlayerLookControls allowControls={allowMoveControls} />
                <PlayerActionControls
                  allowControls={allowActionControls}
                  eKeyAction={eKeyAction}
                />
              </>
            )}
            <PlayerCamera />
            <Rain />
            <GlobalSound
              url="/assets/audio/noire.mp3"
              volume={musicVolume}
              startMusic={startMusic}
            />
            {!finishedIntro && (
              <IntroCameraFov
                startIntro={startIntro}
                allowMoveControls={allowMoveControls}
                allowActionControls={allowActionControls}
                setFinishedIntro={setFinishedIntro}
              />
            )}
            {finishedIntro && (
              <ActionsHandler
                allowControls={allowMoveControls}
                activeQuestsRef={activeQuestsRef}
                addQuest={addQuest}
                completeQuest={completeQuest}
                setMessage={setMessage}
                eKeyAction={eKeyAction}
                showDeskMenu={showDeskMenu}
              />
            )}
          </Canvas>
        )}
      </div>
    </div>
  );
}

export default MainCanvas;
