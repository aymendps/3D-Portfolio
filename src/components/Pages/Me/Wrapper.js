import React from "react";
import { motion } from "framer-motion";

function Wrapper({ children }) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { ease: "easeOut" } }}
      exit={{ y: "100%", transition: { ease: "easeIn" } }}
      transition={{ duration: 0.25 }}
      className="absolute origin-top flex z-[99] top-0 left-[4.2rem] w-[92%] h-full overflow-auto bg-paper bg-paper-image bg-repeat bg-size-25% text-black font-berkshire"
    >
      {children}
    </motion.div>
  );
}

export default Wrapper;
