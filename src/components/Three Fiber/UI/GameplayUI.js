import Message from "./GameplayUI Children/Message";
import MuteButton from "./GameplayUI Children/MuteButton";

function GameplayUI({ musicVolume, setMusicVolume, message, setMessage }) {
  return (
    <>
      <MuteButton musicVolume={musicVolume} setMusicVolume={setMusicVolume} />
      <Message message={message} setMessage={setMessage} />
    </>
  );
}

export default GameplayUI;
