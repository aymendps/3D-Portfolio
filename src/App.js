import MainCanvas from "./components/Three Fiber/MainCanvas";
import { useState } from "react";
import LandingPage from "./components/Pages/LandingPage";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return !isClicked ? (
    <LandingPage setIsClicked={setIsClicked} />
  ) : (
    <MainCanvas isClicked={isClicked} />
  );
}

export default App;
