import { Divider, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import CheckOffIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckOnIcon from "@mui/icons-material/CheckCircle";

function QuestList({ activeQuests, activeQuestsRef, setActiveQuests }) {
  const showActiveQuests = activeQuests.map((quest, index) => {
    return (
      <motion.li
        className="mb-3 first:mt-3"
        key={quest}
        layout
        initial={{ opacity: 0, color: "silver" }}
        animate="add"
        exit="complete"
        transition={{ duration: 0.3 }}
        variants={{
          add: {
            opacity: 1,
            transition: { delay: 0.5 },
          },
          complete: {
            color: "lightgreen",
            opacity: 0,
            transition: { opacity: { delay: 0.5, duration: 0.3 } },
          },
        }}
        onAnimationComplete={(animation) => {
          if (animation === "add") {
            activeQuestsRef.current.push(quest);
          }
        }}
      >
        <div className="flex gap-2 items-center">
          <motion.div
            initial={{ display: "block" }}
            exit={{ display: "none" }}
            transition={{ duration: 0 }}
          >
            <CheckOffIcon />
          </motion.div>
          <motion.div
            initial={{ display: "none" }}
            exit={{ display: "block" }}
            transition={{ duration: 0 }}
          >
            <CheckOnIcon />
          </motion.div>
          <Typography className="font-berkshire">{quest}</Typography>
        </div>
      </motion.li>
    );
  });

  return (
    <div className="absolute z-10 w-[25%] h-[90%] top-4 right-0 ">
      <motion.div
        initial={{ rotateX: 90 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography className="font-berkshire" variant="h4">
          Tasks to do
        </Typography>
        <Divider className="bg-white" />
      </motion.div>
      <ul>
        <AnimatePresence>{showActiveQuests}</AnimatePresence>
      </ul>
    </div>
  );
}

export default QuestList;
