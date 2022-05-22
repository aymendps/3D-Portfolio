import { Typography } from "@mui/material";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import bgParticles from "../assets/bgParticles.json";
import TypeWriter from "typewriter-effect";

function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const messages = [
    "Passionate, Creative, Quick Learner, Problem Solver.",
    "I always seek to sharpen & improve my skills.",
    "I want to excel in leadership, teamwork and development.",
    "I want to learn new technologies and apply them.",
    "I want to work as a game developer one day.",
  ];

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
              <Typography variant="h4">Welcome to my Website!</Typography>
            </div>
            <Typography variant="h2" fontWeight="bold">
              I'm <span style={{ color: "aqua" }}>Aymen Hammami</span>
            </Typography>
            <TypeWriter
              onInit={(typewriter) => {
                typewriter.pauseFor(2000);
                messages.forEach((element) => {
                  typewriter
                    .typeString(element)
                    .pauseFor(750)
                    .deleteAll()
                    .pauseFor(250);
                });
                typewriter.start();
              }}
              options={{
                wrapperClassName: "typewriter",
                cursorClassName: "Typewriter__cursor typewriter-cursor",
                autoStart: false,
                loop: true,
                delay: 75,
                deleteSpeed: 10,
              }}
            />
          </div>
          <div className="intro-picture"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
