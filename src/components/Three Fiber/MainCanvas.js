import { useCallback, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei/core";
import PlayerCamera from "./Controllers/PlayerCamera";
import CustomLoader from "./CustomLoader";
import WindowLight from "./Objects/WindowLight";
import Office from "./Objects/Office";
import { OrbitControls } from "@react-three/drei";
import PlayerMoveControls from "./Controllers/PlayerMoveControls";
import Rain from "./Objects/Rain";

function MainCanvas({ isClicked }) {
  const [isDev] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const rainAudioRef = useCallback(
    (node) => {
      if (node !== null && isClicked === true) {
        node.volume = 0.3;
        node.play();
      }
    },
    [isClicked]
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
        <CustomLoader setIsStarted={setIsStarted} />
        {isStarted && (
          <Canvas>
            <Office />
            <WindowLight />
            {isDev ? <OrbitControls /> : <PlayerMoveControls />}
            <PlayerCamera />
            <Rain />

            {/* <GlobalSound
          url="/assets/audio/rain_medium.ogg"
          volume={0.3}
          isStarted={isStarted}
           /> */}
          </Canvas>
        )}
      </div>
    </>
  );
}

export default MainCanvas;
