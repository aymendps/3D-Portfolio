// import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-medium-image-zoom/dist/styles.css";
import App from "./App";
// import ParticlesPage from "./components/Pages/ParticlesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

function ToRender() {
  // const [stopParticles, setStopParticles] = useState(false);
  return (
    <>
      <App /*setStopParticles={setStopParticles}*/ />
      {/* <ParticlesPage stop={stopParticles} /> */}
    </>
  );
}

root.render(<ToRender />);
