import { Button, CircularProgress, Typography } from "@mui/material";
import { DefaultLoadingManager } from "three";
import TypeWriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CustomLoader({
  isStarted,
  setIsStarted,
  startIntro,
  setStartIntro,
  setFinishedIntro,
  setStartMusic,
  setStopParticles,
}) {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const clickRef = useRef();
  const [showStartButton, setShowStartButton] = useState(false);
  const [prepareForIntro, setPrepareForIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsStarted(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isStarted === true) {
      DefaultLoadingManager.onProgress = function (item, loaded, total) {
        progressRef.current = (loaded / total) * 100;
        clickRef.current.click();
      };
      DefaultLoadingManager.onLoad = function () {
        console.log("COMPLETE");
        setTimeout(() => {
          setShowStartButton(true);
        }, 500);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStarted]);

  return (
    <>
      <AnimatePresence>
        {!prepareForIntro && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 2.5 } }}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-12 z-[99999999] select-none"
          >
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Aymen Hammami")
                  .pauseFor(750)
                  .deleteAll()
                  .pauseFor(250);
                typewriter.start();
              }}
              options={{
                wrapperClassName:
                  "font-[Arizonia] bold text-[3.75rem] font-bold pr-2",
                cursorClassName:
                  "Typewriter__cursor font-[Arizonia] bold text-[3.75rem]",
                loop: true,
                delay: 75,
                deleteSpeed: 10,
              }}
            />

            <div className="w-[150px] h-[150px] flex justify-center items-center">
              <AnimatePresence>
                {!showStartButton && (
                  <motion.div
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="relative"
                  >
                    <CircularProgress
                      variant="determinate"
                      value={100}
                      size={130}
                      thickness={2}
                      className="text-cyan-300"
                    ></CircularProgress>
                    <CircularProgress
                      variant="indeterminate"
                      size={130}
                      thickness={2}
                      className="text-gray-400 absolute top-0 left-0"
                    />
                    <Typography
                      key="canvas-progress-number"
                      fontFamily="'Arizonia', cursive;"
                      textAlign="center"
                      className="absolute text-[28px] top-0 left-0 w-full pt-[32%] text-cyan-300"
                      variant="body1"
                    >
                      {Math.floor(progress) + "%"}
                    </Typography>
                  </motion.div>
                )}
              </AnimatePresence>
              {showStartButton && (
                <motion.div
                  initial={{ rotateY: -90, opacity: 0, display: "none" }}
                  animate={{
                    rotateY: 0,
                    opacity: 1,
                    display: "block",
                    transition: { delay: 1.5, duration: 1 },
                  }}
                >
                  <Button
                    className="w-[130px] h-[130px] rounded-[50%] border-4 border-cyan-300 font-[Arizonia]  normal-case text-[2.2rem]"
                    variant="outlined"
                    sx={{ color: "cyan" }}
                    onClick={() => {
                      setStartMusic(true);
                      setStopParticles(true);
                      setPrepareForIntro(true);
                      setTimeout(() => {
                        setStartIntro(true);
                      }, 3000);
                    }}
                  >
                    Start
                  </Button>
                </motion.div>
              )}
            </div>

            <button
              className="hidden"
              ref={clickRef}
              onClick={() => {
                setProgress(progressRef.current);
              }}
            ></button>
          </motion.div>
        )}
      </AnimatePresence>

      {startIntro && (
        <motion.div>
          <motion.div
            initial={{ rotateX: 90 }}
            animate={{ rotateX: [90, 0, 0, 90], display: "none" }}
            transition={{
              rotateX: { delay: 2, times: [0, 0.3, 0.7, 1], duration: 2 },
              display: { delay: 4.7 },
            }}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 z-[99999999] select-none"
          >
            <Typography
              fontFamily="'Arizonia', cursive;"
              fontWeight="bold"
              textAlign="center"
              variant="h1"
            >
              Welcome to
            </Typography>
          </motion.div>
          <motion.div
            initial={{ rotateX: 90 }}
            animate={{ rotateX: [90, 0, 0, 90], display: "none" }}
            transition={{
              rotateX: { delay: 5.7, times: [0, 0.3, 0.7, 1], duration: 11 },
              display: { delay: 17 },
            }}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 z-[99999999] select-none"
          >
            <img
              alt=""
              src="/assets/images/portfolio-title-animated.svg"
              className="w-[70%] select-none"
            ></img>
          </motion.div>
          <motion.div
            initial={{ rotateX: 90 }}
            animate={{ rotateX: [90, 0, 0, 90], display: "none" }}
            transition={{
              rotateX: { delay: 18, times: [0, 0.3, 0.7, 1], duration: 3 },
              display: { delay: 21 },
            }}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 z-[99999999] select-none"
          >
            <Typography
              fontFamily="'Arizonia', cursive;"
              textAlign="center"
              variant="h4"
              className="underline"
            >
              Idea Of
            </Typography>
            <Typography
              fontFamily="'Arizonia', cursive;"
              fontWeight="bold"
              textAlign="center"
              variant="h2"
            >
              Aymen Hammami
            </Typography>
          </motion.div>
          <motion.div
            initial={{ rotateX: 90 }}
            animate={{ rotateX: [90, 0, 0, 90], display: "none" }}
            transition={{
              rotateX: { delay: 22, times: [0, 0.3, 0.7, 1], duration: 3 },
              display: { delay: 25 },
            }}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 z-[99999999] select-none"
          >
            <Typography
              fontFamily="'Arizonia', cursive;"
              textAlign="center"
              variant="h4"
              className="underline"
            >
              Implemented By:
            </Typography>
            <Typography
              fontFamily="'Arizonia', cursive;"
              fontWeight="bold"
              textAlign="center"
              variant="h2"
            >
              Aymen Hammami
            </Typography>
          </motion.div>
          <motion.div
            initial={{ rotateX: 90 }}
            animate={{ rotateX: [90, 0, 0, 90], display: "none" }}
            transition={{
              rotateX: { delay: 26, times: [0, 0.3, 0.7, 1], duration: 4 },
              display: { delay: 30 },
            }}
            onAnimationComplete={() => {
              setFinishedIntro(true);
            }}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 z-[99999999] select-none"
          >
            <Typography
              fontFamily="'Arizonia', cursive;"
              textAlign="center"
              variant="h3"
              className="underline"
            >
              Starring:
            </Typography>
            <Typography
              fontFamily="'Arizonia', cursive;"
              fontWeight="bold"
              textAlign="center"
              variant="h1"
              className="text-[10rem]"
            >
              YOU
            </Typography>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default CustomLoader;
