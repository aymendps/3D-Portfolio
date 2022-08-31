import { IconButton, SvgIcon } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Wrapper({ pages }) {
  const [selectedPage, setSelectedPage] = useState(0);
  const [backgroundPage, setBackgroundPage] = useState(null);
  const pageDirection = useRef("next");

  const handleNextPage = () => {
    pageDirection.current = "next";
    setBackgroundPage(selectedPage + 1);
  };

  const handlePreviousPage = () => {
    pageDirection.current = "prev";
    setBackgroundPage(selectedPage);
  };

  const previousPageButton = (
    <motion.div
      className="absolute bottom-2 left-4"
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.7 }}
      animate={{ scale: 1.5 }}
    >
      <IconButton disableRipple onClick={handlePreviousPage}>
        <SvgIcon viewBox="0 0 512 512" fontSize="large">
          <path
            d="M422.52 404.55c0-92.006-1.243-95.736-1.243-95.736 204.583-58.483-212.586-77.202-252.76-71.863l-.15 34.762-118.71-68.004 118.346-65.303 1.394 33.82c303.74-5.71 371.256 83.987 253.124 232.325z"
            className="fill-my-brown"
            fillOpacity="1"
          ></path>
        </SvgIcon>
      </IconButton>
    </motion.div>
  );

  const nextPageButton = (
    <motion.div
      className="absolute bottom-2 right-4"
      initial={{ scale: 0, rotateY: 180 }}
      whileHover={{ scale: 1.7 }}
      animate={{ scale: 1.5 }}
    >
      <IconButton disableRipple onClick={handleNextPage}>
        <SvgIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="text-[32px]"
        >
          <path
            d="M422.52 404.55c0-92.006-1.243-95.736-1.243-95.736 204.583-58.483-212.586-77.202-252.76-71.863l-.15 34.762-118.71-68.004 118.346-65.303 1.394 33.82c303.74-5.71 371.256 83.987 253.124 232.325z"
            className="fill-my-brown"
            fillOpacity="1"
          ></path>
        </SvgIcon>
      </IconButton>
    </motion.div>
  );

  const showPage = pages.map((page, index) => {
    return (
      selectedPage === index && (
        <motion.div
          key={"show-page-number-" + index}
          initial={{
            transformOrigin: "left",
            rotateY: pageDirection.current === "next" ? 0 : 90,
          }}
          animate={pageDirection.current === "prev" && "animate"}
          exit={pageDirection.current === "next" && "exit"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="basis-[96%] z-[99] relative p-4 border-r-2 border-my-brown bg-paper bg-paper-image bg-repeat"
          variants={{ exit: { rotateY: 90 }, animate: { rotateY: 0 } }}
          onAnimationComplete={(animation) => {
            if (animation === "exit" || animation === "animate") {
              setBackgroundPage(null);
            }
          }}
        >
          {index > 0 && previousPageButton}
          {index !== pages.length - 1 && nextPageButton}
          {page}
        </motion.div>
      )
    );
  });

  useEffect(() => {
    if (backgroundPage) {
      if (pageDirection.current === "next") {
        setSelectedPage((current) => current + 1);
      } else if (pageDirection.current === "prev") {
        setSelectedPage((current) => current - 1);
      }
    }
  }, [backgroundPage]);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { ease: "easeOut" } }}
      exit={{ y: "100%", transition: { ease: "easeIn" } }}
      transition={{ duration: 0.25 }}
      className="absolute flex z-[99] top-0 left-[4.2rem] w-[92%] h-full overflow-hidden text-black font-berkshire bg-paper bg-paper-image bg-repeat"
    >
      <AnimatePresence mode="wait">{showPage}</AnimatePresence>
      <div className="absolute z-[10] top-0 left-0 w-[96%] h-full p-4 border-r-2 border-my-brown">
        {pages[backgroundPage]}
      </div>
      <div className="basis-[4%] flex">
        <div className="w-1/4 h-full bg-[rgba(63,44,35,0.4)]"></div>
        <div className="w-1/4 h-full bg-[rgba(63,44,35,0.5)]"></div>
        <div className="w-1/4 h-full bg-[rgba(63,44,35,0.6)]"></div>
        <div className="w-1/4 h-full bg-[rgba(63,44,35,0.7)]"></div>
      </div>
    </motion.div>
  );
}

export default Wrapper;
