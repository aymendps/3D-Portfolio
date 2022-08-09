import MainCanvas from "./components/Three Fiber/MainCanvas";
import { useState } from "react";
import LandingPage from "./components/Pages/LandingPage";

function App({ setStopParticles }) {
  const [isClicked, setIsClicked] = useState(false);

  return !isClicked ? (
    <>
      <LandingPage setIsClicked={setIsClicked} />
    </>
  ) : (
    <MainCanvas setStopParticles={setStopParticles} isClicked={isClicked} />
  );
}

export default App;
