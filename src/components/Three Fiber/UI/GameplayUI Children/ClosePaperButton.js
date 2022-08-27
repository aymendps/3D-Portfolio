import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useState } from "react";

function ClosePaperButton({ closeFunction }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={isShown ? "end" : "start"}
      exit={{ scale: 0, transition: { duration: 0.3, delay: 0 } }}
      variants={{
        start: {
          scale: 1,
          transition: { duration: 0.3, delay: 0 },
        },
        end: {
          scale: [1, 1.2, 1],
          rotateZ: [0, 10, 0, -10, 0],
          transition: {
            delay: 1,
            repeat: Infinity,
            repeatDelay: 2,
            duration: 0.3,
          },
        },
      }}
      onAnimationComplete={(animation) => {
        console.log(animation);
        if (animation === "start") {
          setIsShown(true);
        } else if (animation === "end") {
          setIsShown(false);
        }
      }}
      className="absolute left-2 top-16 z-10"
    >
      <IconButton className="text-white" onClick={closeFunction}>
        <CloseIcon fontSize="large" />
      </IconButton>
    </motion.div>
  );
}

export default ClosePaperButton;
