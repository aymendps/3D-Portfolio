import { useCallback, useRef, useState } from "react";
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
import CustomLoader from "./UI/CustomLoader";
import GlobalSound from "./Audio/GlobalSound";
import MuteButton from "./UI/MuteButton";

function MainCanvas({ isClicked }) {
  const [isDev] = useState(false);

  const [isStarted, setIsStarted] = useState(false);
  const [startIntro, setStartIntro] = useState(false);
  const [startMusic, setStartMusic] = useState(false);
  const [finishedIntro, setFinishedIntro] = useState(false);
  const allowControls = useRef(false);

  const [musicVolume, setMusicVolume] = useState(0.3);

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

  return (
    <>
      <audio
        loop
        type="audio"
        src="/assets/audio/rain_medium.ogg"
        ref={rainAudioRef}
      />
      <div className="fixed w-full h-[100vh] top-0 left-0 bg-gray-900">
        {!finishedIntro ? (
          <CustomLoader
            isStarted={isStarted}
            setIsStarted={setIsStarted}
            startIntro={startIntro}
            setStartIntro={setStartIntro}
            setFinishedIntro={setFinishedIntro}
            setStartMusic={setStartMusic}
          />
        ) : (
          <>
            <MuteButton
              musicVolume={musicVolume}
              setMusicVolume={setMusicVolume}
            />
          </>
        )}
        {isStarted && (
          <Canvas>
            <Office />
            <WindowLight />
            {isDev ? (
              <OrbitControls />
            ) : (
              <>
                <PlayerMoveControls allowControls={allowControls} />
                <PlayerLookControls allowControls={allowControls} />
              </>
            )}
            <PlayerCamera />
            <Rain />

            <GlobalSound
              url="/assets/audio/noire.mp3"
              volume={musicVolume}
              startMusic={startMusic}
            />

            <IntroCameraFov
              startIntro={startIntro}
              allowControls={allowControls}
            />
          </Canvas>
        )}
      </div>
    </>
  );
}

export default MainCanvas;
