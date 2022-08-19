import { Button, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function LandingPage({ setIsClicked }) {
  const [shouldExit, setShouldExit] = useState(false);

  const handleClick = () => {
    setShouldExit(true);
    setTimeout(() => {
      setIsClicked(true);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!shouldExit && (
          <motion.div
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full h-[100vh] top-0 left-0 z-10"
          >
            <motion.h2
              initial={{
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "100vh",
              }}
              animate={{ rotateX: [0, 90], display: "none" }}
              transition={{
                rotateX: { delay: 1, duration: 0.5 },
                display: { delay: 1.5 },
              }}
              className="font-berkshire bold text-[3.75rem] font-bold"
            >
              Hey there!
            </motion.h2>
            <motion.h2
              initial={{
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "100vh",
              }}
              animate={{ rotateX: [90, 0, 0, 90], display: "none" }}
              transition={{
                rotateX: { delay: 2, times: [0, 0.3, 0.7, 1], duration: 2.9 },
                display: { delay: 5 },
              }}
              className="font-berkshire bold text-[3.75rem] font-bold"
            >
              Thanks for checking out my website!
            </motion.h2>
            <div className="flex flex-col items-center justify-center w-full h-full gap-8">
              <motion.h2
                initial={{
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
                animate={{ rotateX: [90, 0] }}
                transition={{
                  rotateX: { delay: 5.5, duration: 0.5 },
                }}
                className="font-berkshire text-[3.75rem] font-bold"
              >
                Are you ready?
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{ opacity: 1, pointerEvents: "all" }}
                transition={{ delay: 5.8, duration: 0.3 }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <Button
                  onClick={handleClick}
                  variant="outlined"
                  sx={{ transition: "250ms !important" }}
                  className="font-berkshire text-[2.2rem] hover:text-[2.5rem] font-bold normal-case px-12 rounded-3xl text-cyan-300 border-cyan-300"
                >
                  {"> Let's go <"}
                </Button>
                <Typography className="font-berkshire text-[1.5rem] text-cyan-400">
                  For a better experience, please enable fullscreen mode 'F11'
                </Typography>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!shouldExit && (
          <motion.div
            initial={{ x: "-100%", y: "10%" }}
            animate={{ x: "5%", y: "10%" }}
            exit={{ x: "-100%", y: "10%" }}
            transition={{ duration: 0.5 }}
            className="absolute z-20"
          >
            <Typography className="font-berkshire">
              Version: 0.5.0
              <br />
              August 2022
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default LandingPage;
