import Message from "./GameplayUI Children/Message";
import MuteButton from "./GameplayUI Children/MuteButton";
import QuestList from "./GameplayUI Children/QuestList";
import About from "../../Pages/About";
import Skills from "../../Pages/Skills";
import Portfolio from "../../Pages/Portfolio";
import Contact from "../../Pages/Contact";

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
      {showThisPage === "about" && <About />}
      {showThisPage === "skills" && <Skills />}
      {showThisPage === "portfolio" && <Portfolio />}
      {showThisPage === "contact" && <Contact />}
    </>
  );
}

export default GameplayUI;
