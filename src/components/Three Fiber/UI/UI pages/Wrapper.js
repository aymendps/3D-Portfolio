import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Wrapper({ pages }) {
  const [selectedPage, setSelectedPage] = useState(0);
  const [backgroundPage, setBackgroundPage] = useState(null);
  const pageDirection = useRef("next");
  const canNavigate = useRef(true);
  const previousButtonRef = useRef();
  const nextButtonRef = useRef();

  const handleNextPage = () => {
    if (canNavigate.current === false) return;

    pageDirection.current = "next";
    canNavigate.current = false;
    setBackgroundPage(selectedPage + 1);
  };

  const handlePreviousPage = () => {
    if (canNavigate.current === false) return;

    pageDirection.current = "prev";
    canNavigate.current = false;
    setBackgroundPage(selectedPage);
  };

  const previousPageButton = (
    <button
      className="absolute bottom-0 left-0 w-0 h-0"
      ref={previousButtonRef}
      onClick={handlePreviousPage}
    ></button>
  );

  const nextPageButton = (
    <button
      className="absolute bottom-0 right-0 w-0 h-0"
      ref={nextButtonRef}
      onClick={handleNextPage}
    ></button>
  );

  const showPage = pages.map((page, index) => {
    return (
      selectedPage === index && (
        <motion.div
          key={"show-page-number-" + index}
          initial={{
            y: pageDirection.current === "next" ? 0 : "-100%",
          }}
          animate={pageDirection.current === "prev" && "animate"}
          exit={pageDirection.current === "next" && "exit"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="basis-[96%] z-[99] relative p-4 border-r-2 border-b-2 border-my-brown bg-paper bg-paper-image bg-repeat"
          variants={{ exit: { y: "-100%" }, animate: { y: 0 } }}
          onAnimationComplete={(animation) => {
            if (animation === "exit" || animation === "animate") {
              canNavigate.current = true;
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

  const wheelHandler = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      if (nextButtonRef.current && canNavigate.current) {
        nextButtonRef.current.click();
      }
    } else {
      if (previousButtonRef.current && canNavigate.current) {
        previousButtonRef.current.click();
      }
    }
  };

  const keyDownHandler = (event) => {
    if (event.code === "KeyS") {
      if (nextButtonRef.current && canNavigate.current) {
        nextButtonRef.current.click();
      }
    } else if (event.code === "KeyW") {
      if (previousButtonRef.current && canNavigate.current) {
        previousButtonRef.current.click();
      }
    }
  };

  const getBackgroundPapers = () => {
    const papers = [
      <div
        key="fake-background-paper-0"
        className="w-[15px] h-full bg-[rgba(63,44,35,0.4)]"
      ></div>,
      <div
        key="fake-background-paper-1"
        className="w-[15px] h-full bg-[rgba(63,44,35,0.5)]"
      ></div>,
      <div
        key="fake-background-paper-2"
        className="w-[15px] h-full bg-[rgba(63,44,35,0.6)]"
      ></div>,
      <div
        key="fake-background-paper-3"
        className="w-[15px] h-full bg-[rgba(63,44,35,0.7)]"
      ></div>,
    ];
    if (pages.length - selectedPage - 1 < 5) {
      papers.length = pages.length - selectedPage - 1;
    }

    return papers;
  };

  useEffect(() => {
    if (backgroundPage) {
      if (pageDirection.current === "next") {
        setSelectedPage((current) => current + 1);
      } else if (pageDirection.current === "prev") {
        setSelectedPage((current) => current - 1);
      }
    }
  }, [backgroundPage]);

  useEffect(() => {
    window.addEventListener("wheel", wheelHandler);
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("keydown", keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { ease: "easeOut" } }}
      exit={{ y: "100%", transition: { ease: "easeIn" } }}
      transition={{ duration: 0.25 }}
      className="absolute flex z-[99] top-0 left-[4.2rem] w-[92%] h-full overflow-hidden text-black font-berkshire"
    >
      <AnimatePresence mode="wait">{showPage}</AnimatePresence>
      <div className="absolute z-[10] top-0 left-0 w-[96%] h-full p-4 border-r-2 border-b-2 border-my-brown bg-paper-image bg-repeat">
        {pages[backgroundPage]}
      </div>
      <div className="max-w-[4%] flex bg-paper-image bg-repeat border-b-2 border-my-brown">
        {getBackgroundPapers()}
      </div>
    </motion.div>
  );
}

export default Wrapper;
