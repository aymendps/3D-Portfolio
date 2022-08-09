import { Button } from "@mui/material";
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
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed w-full h-[100vh] top-0 left-0 bg-gray-900"
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
            className="font-[Arizonia] bold text-[3.75rem] font-bold"
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
              rotateX: { delay: 2, times: [0, 0.3, 0.7, 1], duration: 2 },
              display: { delay: 4 },
            }}
            className="font-[Arizonia] bold text-[3.75rem] font-bold"
          >
            Welcome to my portfolio!
          </motion.h2>
          <div className="flex flex-col items-center justify-center w-full h-full gap-6">
            <motion.h2
              initial={{
                textAlign: "center",
                verticalAlign: "middle",
              }}
              animate={{ rotateX: [90, 0] }}
              transition={{
                rotateX: { delay: 4.5, duration: 0.5 },
              }}
              className="font-[Arizonia] bold text-[3.75rem] font-bold"
            >
              Are you ready?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, pointerEvents: "none" }}
              animate={{ opacity: 1, pointerEvents: "all" }}
              transition={{ delay: 5, duration: 0.3 }}
            >
              <Button
                onClick={handleClick}
                variant="outlined"
                sx={{ transition: "250ms !important" }}
                className="font-[Arizonia] bold text-[2.2rem] hover:text-[2.5rem] font-bold normal-case px-12 rounded-3xl text-cyan-300 border-cyan-300"
              >
                {"> Start <"}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LandingPage;
