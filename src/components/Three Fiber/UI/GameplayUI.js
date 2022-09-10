import Message from "./UI items/quests related/Message";
import MuteButton from "./UI items/buttons/MuteButton";
import QuestList from "./UI items/quests related/QuestList";
import About from "./UI pages/About";
import Skills from "./UI pages/Skills";
import Portfolio from "./UI pages/Portfolio";
import ClosePaperButton from "./UI items/buttons/ClosePaperButton";
import { AnimatePresence } from "framer-motion";
import PreloadImages from "./UI items/preload/PreloadImages";
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
