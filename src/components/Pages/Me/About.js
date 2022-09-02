import { IconButton, SvgIcon, Typography } from "@mui/material";
import TypewriterComponent from "typewriter-effect";
import Wrapper from "./Wrapper";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StickerWrapper from "./Shared/StickerWrapper";
import DecoratedTitle from "./Shared/DecoratedTitle";
import CoverPage from "./Shared/CoverPage";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";

function About() {
  const messages = [
    "Passionate, Creative, Quick Learner, Problem Solver.",
    "I always seek to sharpen & improve my skills.",
    "I try to be the best team player.",
    "I wanna work as a game developer one day.",
    "I know code never lies, but comments sometimes do.",
  ];

  const coverPage = <CoverPage title="About me" />;

  const mePage = (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex w-[80%] justify-center items-center">
        <div className="basis-[65%] flex flex-col items-center justify-center gap-10">
          <div className="w-full">
            <Typography
              variant="h3"
              className="font-bold font-berkshire text-my-brown text-center"
            >
              I'm <span className="text-my-orange-brown">Aymen Hammami</span>
            </Typography>
            <Typography
              variant="h5"
              className="font-bold font-berkshire text-my-brown italic text-center"
            >
              Not your average software engineer
            </Typography>
          </div>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.pauseFor(500);
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
              wrapperClassName:
                "font-berkshire text-[1.6rem] pr-2 text-my-orange-brown",
              cursorClassName:
                "Typewriter__cursor font-berkshire text-[1.6rem] text-my-light-brown",
              autoStart: false,
              loop: true,
              delay: 75,
              deleteSpeed: 20,
            }}
          />

          <div className="w-full h-[400px] flex justify-center">
            <StickerWrapper color="orange" width="40%">
              <div className="mt-11 ml-2">
                <Typography className="font-berkshire">
                  - Nationality:{" "}
                  <span className="text-my-light-brown">Tunisian</span>
                </Typography>
                <Typography className="font-berkshire">
                  - Age:{" "}
                  <span className="text-my-light-brown">23 years old</span>
                </Typography>
                <Typography className="font-berkshire">
                  - Uni year:{" "}
                  <span className="text-my-light-brown">Senior year (4th)</span>
                </Typography>
                <Typography className="font-berkshire">
                  - Specialty:{" "}
                  <span className="text-my-light-brown">Software Eng.</span>
                </Typography>
                <Typography className="font-berkshire">
                  - Favourite games:{" "}
                  <span className="text-my-light-brown">
                    DOS2 - Witcher 3 - Persona - Hades - Rocket League - WOW
                  </span>
                </Typography>
              </div>
            </StickerWrapper>
            <StickerWrapper color="yellow" width="40%" maxHeight="250px">
              <Typography className="font-berkshire mt-2 mb-4 text-my-light-brown text-center text-[1.2rem]">
                Social Accounts:
              </Typography>
              <div className="flex w-full justify-around flex-wrap">
                <div className="duration-200 hover:scale-110">
                  <IconButton
                    disableRipple
                    onClick={() => {
                      window.open("https://github.com/aymendps", "_blank");
                    }}
                  >
                    <GitHubIcon className="text-my-light-brown text-[2.6rem]" />
                  </IconButton>
                </div>
                <div className="duration-200 hover:scale-110">
                  <IconButton
                    disableRipple
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/in/aymendps/",
                        "_blank"
                      );
                    }}
                  >
                    <LinkedInIcon className="text-my-light-brown text-[2.6rem]" />
                  </IconButton>
                </div>
                <div className="duration-200 hover:scale-110">
                  <IconButton
                    disableRipple
                    onClick={() => {
                      window.open(
                        "https://stackoverflow.com/users/18047369/aymendps",
                        "_blank"
                      );
                    }}
                  >
                    <SvgIcon viewBox="-24 0 304 304" className="text-[2.4rem]">
                      <g>
                        <polygon
                          className="fill-my-light-brown"
                          points="216.329708 276.187929 216.329708 194.976776 243.28341 194.976776 243.28341 303.14163 0 303.14163 0 194.976776 26.9537015 194.976776 26.9537015 276.187929"
                        ></polygon>
                        <path
                          d="M56.7077876,187.275718 L189.025959,214.929516 L194.626728,188.325863 L62.3085568,160.672065 L56.7077876,187.275718 L56.7077876,187.275718 Z M74.2101912,124.267065 L196.727016,181.324901 L207.928555,156.821536 L85.4117295,99.4136524 L74.2101912,124.267065 Z M108.164854,64.0587971 L212.129132,150.520671 L229.281487,129.867835 L125.31721,43.4059609 L108.164854,64.0587971 L108.164854,64.0587971 Z M175.374084,0 L153.671104,16.1022113 L234.18216,124.617114 L255.88514,108.514902 L175.374084,0 Z M53.9074031,248.884179 L189.025959,248.884179 L189.025959,221.930478 L53.9074031,221.930478 L53.9074031,248.884179 Z"
                          className="fill-my-light-brown"
                        ></path>
                      </g>
                    </SvgIcon>
                  </IconButton>
                </div>
              </div>
            </StickerWrapper>
          </div>
        </div>
        <div className="basis-[35%] relative">
          <img alt="" src="assets/images/me-with-shadow.png"></img>
          {/* <div className="absolute top-[60%] left-0 w-[90%] flex justify-center">
            <Button
              disableRipple
              variant="contained"
              className="font-berkshire normal-case text-my-brown bg-orange-400 text-[1rem]"
              endIcon={<VolumeUpIcon />}
            >
              Pronounce your name
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );

  const educationPage = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle
          title="My Education"
          variant="h2"
          decorationSize={120}
        />
      </div>
      <div className="basis-[85%] w-full flex items-center">
        <div className="w-[45%] h-full bg-black">
          <div></div>
        </div>
        <div className="w-[10%] h-[85%] flex flex-col justify-center items-center">
          <div className="h-[5%] aspect-square rounded-[50%] bg-my-orange-brown"></div>
          <div className="w-[5px] aspect-auto bg-my-orange-brown h-[25%]"></div>
          <div className="h-[5%] aspect-square rounded-[50%] bg-my-orange-brown"></div>
          <div className="w-[5px] aspect-auto bg-my-orange-brown h-[25%]"></div>
          <div className="h-[5%] aspect-square rounded-[50%] bg-my-orange-brown"></div>
          <div className="w-[5px] aspect-auto bg-my-orange-brown h-[25%]"></div>
          <div className="h-[5%] aspect-square rounded-[50%] bg-my-orange-brown"></div>
        </div>
        <div className="w-[45%] h-full bg-black"></div>
      </div>
    </div>
  );

  const experiencePage = (
    <DecoratedTitle title="My Experience" variant="h2" decorationSize={120} />
  );

  const certificatesPage = (
    <DecoratedTitle title="My Certificates" variant="h2" decorationSize={120} />
  );

  const pages = [
    coverPage,
    mePage,
    educationPage,
    experiencePage,
    certificatesPage,
  ];
  return <Wrapper pages={pages}></Wrapper>;
}

export default About;
