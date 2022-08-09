import { Typography } from "@mui/material";
import { useProgress } from "@react-three/drei";
import { DefaultLoadingManager } from "three";
import TypeWriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CustomLoader({ setIsStarted, setFinishedIntro }) {
  const { progress } = useProgress();
  const [startIntro, setStartIntro] = useState(false);

  useEffect(() => {
    DefaultLoadingManager.onLoad = function () {
      console.log("COMPLETE");
      setTimeout(() => {
        setStartIntro(true);
      }, 1000);
    };
    setTimeout(() => {
      setIsStarted(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatePresence>
        {!startIntro && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ rotateX: 90 }}
            className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 z-[99999999] select-none"
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
            <Typography
              key="canvas-progress-number"
              fontFamily="'Arizonia', cursive;"
              fontWeight="bold"
              textAlign="center"
              variant="h2"
            >
              {Math.floor(progress) + "%"}
            </Typography>
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
              Presents
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
              className="text-[140px]"
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
