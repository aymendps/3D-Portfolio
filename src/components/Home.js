import { Typography } from "@mui/material";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import bgParticles from "../assets/bgParticles.json";

function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <Particles
        className="bg-particles"
        init={particlesInit}
        options={bgParticles}
      />
      <div style={{ textAlign: "center" }} className="home-container">
        <p>Website is under construction :D</p>
        <div className="home-intro">
          <div className="intro-bg"></div>
          <div className="intro-text">
            <div>
              <Typography variant="h2" fontWeight="bold">
                Hey there!
              </Typography>
              <Typography variant="h3">Welcome to my Website!</Typography>
            </div>
            <Typography variant="h2" fontWeight="bold">
              I'm <span style={{ color: "aqua" }}>Aymen Hammami</span>
            </Typography>
          </div>
          <div className="intro-picture"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
