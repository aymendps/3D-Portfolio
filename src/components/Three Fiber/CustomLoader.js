import { Typography } from "@mui/material";
import { useProgress } from "@react-three/drei";
import { DefaultLoadingManager } from "three";
import TypeWriter from "typewriter-effect";
import { useEffect } from "react";
import { motion } from "framer-motion";

function CustomLoader({ setIsStarted }) {
  const { progress } = useProgress();

  useEffect(() => {
    DefaultLoadingManager.onLoad = function () {
      console.log("COMPLETE");
    };
    setTimeout(() => {
      setIsStarted(true);
    }, 1000);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 z-[99999999]"
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
    </>
  );
}

export default CustomLoader;
