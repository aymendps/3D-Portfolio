import { Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import bgParticles from "../../assets/bgParticles.json";
import TypeWriter from "typewriter-effect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Home(props) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const messages = [
    "Passionate, Creative, Quick Learner, Problem Solver.",
    "I always seek to sharpen & improve my skills.",
    "I want to excel in teamwork & development.",
    "I want to learn new technologies and apply them.",
    "I want to work as a game developer one day.",
  ];

  const startQuest = () => {
    props.history.push("/quest");
  };

  return (
    <>
      <Particles
        className="bg-particles"
        init={particlesInit}
        options={bgParticles}
      />
      <div style={{ textAlign: "center" }} className="home-container">
        <div className="home-intro">
          <div className="intro-bg"></div>
          <div className="intro-text">
            <div>
              <Typography variant="h2" fontWeight="bold">
                Hey there!
              </Typography>
              <Typography variant="h4">Welcome to my Website!</Typography>
            </div>
            <div>
              <Typography variant="h2" fontWeight="bold">
                I'm <span style={{ color: "aqua" }}>Aymen Hammami</span>
              </Typography>
              <Typography variant="h5" fontStyle="italic">
                Not your average software engineer
              </Typography>
            </div>
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
            <div>
              <IconButton
                href="https://www.github.com/aymendps/"
                target="_blank"
                className="social-icon"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/aymendps/"
                target="_blank"
                className="social-icon"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="mailto: hammami.aym@outlook.com"
                className="social-icon"
              >
                <EmailIcon />
              </IconButton>
            </div>
          </div>
          <div className="intro-picture"></div>
          <Paper className="intro-finish" elevation={5}>
            <div>
              <Typography className="quest-label" id="top-label">
                NEW QUEST
              </Typography>
              <Typography className="quest-label" id="bottom-label">
                THE MAN FROM TUNISIA
              </Typography>
            </div>
            <Button
              variant="contained"
              className="quest-button"
              onClick={startQuest}
            >
              <CheckCircleIcon />
              Take Quest
            </Button>
          </Paper>
        </div>
      </div>
    </>
  );
}

export default Home;
