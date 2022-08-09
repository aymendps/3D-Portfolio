import { IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function MuteButton({ musicVolume, setMusicVolume }) {
  return (
    <IconButton
      className="absolute top-0 right-0 z-10 text-white"
      onClick={() => {
        setMusicVolume((current) => (current === 0.3 ? 0 : 0.3));
      }}
    >
      {musicVolume === 0 ? (
        <VolumeOffIcon fontSize="large" />
      ) : (
        <VolumeUpIcon fontSize="large" />
      )}
    </IconButton>
  );
}

export default MuteButton;
