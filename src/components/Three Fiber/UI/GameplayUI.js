import Message from "./children/Message";
import MuteButton from "./children/MuteButton";
import QuestList from "./children/QuestList";
import About from "../../Pages/Me/About";
import Skills from "../../Pages/Me/Skills";
import Portfolio from "../../Pages/Me/Portfolio";
import ClosePaperButton from "./children/ClosePaperButton";
import { AnimatePresence } from "framer-motion";
import PreloadImages from "./children/PreloadImages";
import { useState } from "react";

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
  const [disableMuteButton, setDisableMuteButton] = useState(false);

  return (
    <>
      <PreloadImages />
      <MuteButton
        musicVolume={musicVolume}
        setMusicVolume={setMusicVolume}
        disableMuteButton={disableMuteButton}
      />
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
        {showThisPage === "portfolio" && (
          <Portfolio
            musicVolume={musicVolume}
            setMusicVolume={setMusicVolume}
            setDisableMuteButton={setDisableMuteButton}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default GameplayUI;
