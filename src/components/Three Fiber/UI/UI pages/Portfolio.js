import VideoPlayer from "../UI items/interfaces/VideoPlayer";
import CoverPage from "./CoverPage";
import DecoratedTitle from "../UI items/interfaces/DecoratedTitle";
import Wrapper from "./Wrapper";
import portfolioConfig from "./Portfolio.config";
import Project from "./Project";
import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function PortfolioPage({
  index,
  pagesNumber,
  musicVolume,
  setMusicVolume,
  setDisableMuteButton,
  overrideHandlers,
  overrideHandlersFunction,
}) {
  const [projectList] = useState(
    portfolioConfig.slice(index * 6, index * 6 + 6)
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPreview, setIsPreview] = useState(true);
  const didInitialRender = useRef(false);

  const handlersFunction = () => {
    overrideHandlers.current = false;
    setIsPreview(true);
  };

  useEffect(() => {
    overrideHandlersFunction.current = handlersFunction;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isPreview ? (
          <motion.div
            key={"my-projects-page-preview" + index}
            initial={didInitialRender.current ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-[95%] flex flex-col items-center"
          >
            <div className="basis-[25%]">
              <DecoratedTitle
                title={`My Projects  ${index + 1} / ${pagesNumber}`}
                variant="h2"
                decorationSize={120}
              />
            </div>
            <div className="basis-[75%] w-[85%] flex flex-wrap gap-[5%] items-start">
              {projectList.map((project, index) => {
                return (
                  <Project
                    key={project.title}
                    isPreview={true}
                    {...project}
                    onClick={() => {
                      didInitialRender.current = true;
                      overrideHandlers.current = true;
                      setSelectedProject(projectList[index]);
                      setIsPreview(false);
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={"my-projects-page-no-preview" + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full"
          >
            <Project
              isPreview={false}
              {...selectedProject}
              onClick={() => {
                overrideHandlers.current = false;
                setIsPreview(true);
              }}
              musicVolume={musicVolume}
              setMusicVolume={setMusicVolume}
              setDisableMuteButton={setDisableMuteButton}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Portfolio({ musicVolume, setMusicVolume, setDisableMuteButton }) {
  const overrideHandlers = useRef(false);
  const overrideHandlersFunction = useRef(null);

  const coverPage = <CoverPage title="My Portfolio" />;

  const demoReelPage = (
    <div className="w-full h-[95%] flex flex-col items-center">
      <div className="basis-[15%]">
        <DecoratedTitle
          title="My Demo Reel"
          variant="h2"
          decorationSize={120}
        />
      </div>
      <div className="basis-[80%] w-full flex justify-center items-center">
        <VideoPlayer
          musicVolume={musicVolume}
          setMusicVolume={setMusicVolume}
          setDisableMuteButton={setDisableMuteButton}
          width="65%"
          url="https://www.youtube.com/watch?v=Svc3JQEW03E"
        />
      </div>
      <div className="basis-[5%]">
        <Typography className="font-berkshire italic text-my-brown">
          This magical paper was provided by Hogwarts
        </Typography>
      </div>
    </div>
  );

  const getProjectPages = () => {
    let pages = [];
    const pagesNumber = Math.ceil(portfolioConfig.length / 6);
    for (let index = 0; index < pagesNumber; index++) {
      pages.push(
        <PortfolioPage
          index={index}
          pagesNumber={pagesNumber}
          musicVolume={musicVolume}
          setMusicVolume={setMusicVolume}
          setDisableMuteButton={setDisableMuteButton}
          overrideHandlers={overrideHandlers}
          overrideHandlersFunction={overrideHandlersFunction}
        />
      );
    }

    return pages;
  };

  const pages = [coverPage, demoReelPage, ...getProjectPages()];
  return (
    <Wrapper
      pages={pages}
      overrideHandlers={overrideHandlers}
      overrideHandlersFunction={overrideHandlersFunction}
    ></Wrapper>
  );
}

export default Portfolio;
