import { useCallback, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import PlayerCamera from "./Controllers/PlayerCamera";
import WindowLight from "./Objects/WindowLight";
import Office from "./Objects/Office";
import { OrbitControls, Stats } from "@react-three/drei";
import PlayerMoveControls from "./Controllers/PlayerMoveControls";
import Rain from "./Objects/Rain";
import IntroCameraFov from "./Controllers/IntroCameraFov";
import PlayerLookControls from "./Controllers/PlayerLookControls";
import CustomLoader from "./CustomLoader";
import GameplayUI from "./UI/GameplayUI";
import ActionsHandler from "./Controllers/ActionsHandler";
import PlayerActionControls from "./Controllers/PlayerActionControls";
import Door from "./Objects/Door";
import { Gramophone } from "./Objects/Gramophone";
import BackgroundMusic from "./Audio/BackgroundMusic";

export const QUESTS = {
  tutorialWalk: "Walk around your office",
  tutorialLook: "Look around you",
  desk: "Sit at your desk",
  me_about: "Have a look at the 'About me' stack",
  me_skills: "Have a look at the 'My skills' stack",
  me_portfolio: "Have a look at the 'My portfolio' stack",
  end: "Let's get in touch!",
};

function MainCanvas(/*{ setStopParticles }*/) {
  const [isDev] = useState(false);

  const [isStarted, setIsStarted] = useState(false);
  const [startIntro, setStartIntro] = useState(false);
  const [startMusic, setStartMusic] = useState(false);
  const [finishedIntro, setFinishedIntro] = useState(false);
  const allowMoveControls = useRef(false);
  const allowActionControls = useRef(false);

  const [musicVolume, setMusicVolume] = useState(0.4);
  const [musicTrackIndex, setMusicTrackIndex] = useState(0);
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

  const isQuestFinished = (quest) => {
    if (activeQuestsRef.current.indexOf(quest) !== -1) {
      return false;
    } else {
      return true;
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

  const getNextMusicTrack = () => {
    setMusicTrackIndex((current) => current + 1);
  };

  const rainAudioRef = useCallback(
    (node) => {
      if (node !== null && startMusic === true) {
        node.volume = musicVolume / 2;
        if (musicVolume === 0) {
          node.pause();
        } else {
          node.play();
        }
      }
    },
    [startMusic, musicVolume]
  );

  const thunderAudioRef = useRef(null);

  useEffect(() => {
    if (musicVolume === 0) {
      thunderAudioRef.current.pause();
      thunderAudioRef.current.currentTime = 0;
    } else {
      thunderAudioRef.current.volume = musicVolume / 2;
    }
  }, [musicVolume]);

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <BackgroundMusic
        startMusic={startMusic}
        musicVolume={musicVolume}
        musicTrackIndex={musicTrackIndex}
        getNextMusicTrack={getNextMusicTrack}
      />
      <audio
        loop
        type="audio"
        src={process.env.PUBLIC_URL + "/assets/audio/rain_medium.ogg"}
        ref={rainAudioRef}
      />
      <audio
        type="audio"
        src={process.env.PUBLIC_URL + "/assets/audio/thunder.mp3"}
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
            // setStopParticles={setStopParticles}
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
            allowActionControls={allowActionControls}
          />
        )}
        {isStarted && (
          <Canvas>
            <PlayerCamera />
            <Office
              showDeskMenu={showDeskMenu}
              setShowThisPage={setShowThisPage}
              completeQuest={completeQuest}
              addQuest={addQuest}
              allowActionControls={allowActionControls}
              isQuestFinished={isQuestFinished}
            />
            <Gramophone
              position={[-2.46, 3.7, -4.44]}
              scale={[1, 1, 1]}
              rotation={[0, (5 * Math.PI) / 6, 0]}
            />
            <Door
              position={[-5.2, 0, -0.35]}
              scale={[1.2, 1, 1]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <Rain />
            <WindowLight
              startIntro={startIntro}
              thunderAudioRef={thunderAudioRef}
              musicVolume={musicVolume}
            />
            {isDev ? (
              <>
                <Stats showPanel={0} />
                <OrbitControls />
              </>
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
                getNextMusicTrack={getNextMusicTrack}
              />
            )}
          </Canvas>
        )}
      </div>
    </div>
  );
}

export default MainCanvas;
