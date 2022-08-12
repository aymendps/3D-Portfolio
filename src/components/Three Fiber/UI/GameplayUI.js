import Message from "./GameplayUI Children/Message";
import MuteButton from "./GameplayUI Children/MuteButton";
import QuestList from "./GameplayUI Children/QuestList";

function GameplayUI({
  musicVolume,
  setMusicVolume,
  message,
  setMessage,
  activeQuests,
  activeQuestsRef,
  setActiveQuests,
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
    </>
  );
}

export default GameplayUI;
