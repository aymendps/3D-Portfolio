import Message from "./GameplayUI Children/Message";
import MuteButton from "./GameplayUI Children/MuteButton";
import QuestList from "./GameplayUI Children/QuestList";
import About from "../../Pages/Me/About";
import Skills from "../../Pages/Me/Skills";
import Portfolio from "../../Pages/Me/Portfolio";
import Contact from "../../Pages/Me/Contact";
import ClosePaperButton from "./GameplayUI Children/ClosePaperButton";
import { AnimatePresence } from "framer-motion";

function GameplayUI({
  musicVolume,
  setMusicVolume,
  message,
  setMessage,
  activeQuests,
  activeQuestsRef,
  setActiveQuests,
  showThisPage,
  setShowThisPage,
  allowActionControls,
}) {
  return (
    <>
      <MuteButton musicVolume={musicVolume} setMusicVolume={setMusicVolume} />
      <Message message={message} setMessage={setMessage} />
      <QuestList
        activeQuests={activeQuests}
        setActiveQuests={setActiveQuests}
        activeQuestsRef={activeQuestsRef}
      />
      <AnimatePresence>
        {showThisPage !== "" && (
          <ClosePaperButton
            closeFunction={() => {
              setShowThisPage("");
              allowActionControls.current = true;
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showThisPage === "about" && <About />}
        {showThisPage === "skills" && <Skills />}
        {showThisPage === "portfolio" && <Portfolio />}
        {showThisPage === "contact" && <Contact />}
      </AnimatePresence>
    </>
  );
}

export default GameplayUI;
