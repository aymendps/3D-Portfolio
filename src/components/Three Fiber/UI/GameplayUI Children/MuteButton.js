import { IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeMute";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

function MuteButton({ musicVolume, setMusicVolume }) {
  const levels = [0.3, 0.1, 0];
  const icons = [
    <VolumeUpIcon fontSize="large" />,
    <VolumeDownIcon fontSize="large" />,
    <VolumeOffIcon fontSize="large" />,
  ];

  return (
    <IconButton
      className="absolute left-4 top-4 z-10 text-white"
      onClick={() => {
        setMusicVolume((current) => {
          const index = levels.indexOf(current);
          if (index === levels.length - 1) {
            return levels[0];
          } else {
            return levels[index + 1];
          }
        });
      }}
    >
      {icons[levels.indexOf(musicVolume)]}
    </IconButton>
  );
}

export default MuteButton;
