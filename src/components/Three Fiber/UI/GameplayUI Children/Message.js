import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Message({ message, setMessage }) {
  const previousContent = useRef("");
  const [hidden, setHidden] = useState(true);
  const countdown = useRef();
  const countdownInterval = useRef();

  useEffect(() => {
    if (
      message.content !== undefined &&
      message.content !== null &&
      message.content !== ""
    ) {
      previousContent.current = message.content;
      countdown.current = Math.ceil(message.duration) || Infinity;
      if (countdown.current === Infinity) {
        clearInterval(countdownInterval.current);
      } else {
        countdownInterval.current = setInterval(() => {
          if (countdown.current === 0) {
            clearInterval(countdownInterval.current);
            setHidden(true);
          } else {
            countdown.current--;
          }
        }, 1000);
      }
      setHidden(false);
    } else {
      clearInterval(countdownInterval.current);
      setHidden(true);
    }

    return () => {
      clearInterval(countdownInterval.current);
    };
  }, [message]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={message.content || previousContent.current}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={hidden ? "hidden" : "visible"}
        exit={{ opacity: 0 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="absolute px-1 py-2 z-10 bottom-12 w-[50%] ml-[25%] bg-[rgba(60,60,60,0.6)] rounded-2xl pointer-events-none select-none"
      >
        <Typography
          textAlign="center"
          fontFamily="Berkshire Swash"
          className="text-[1.5rem]"
        >
          {message.content || previousContent.current}
        </Typography>
      </motion.div>
    </AnimatePresence>
  );
}

export default Message;
