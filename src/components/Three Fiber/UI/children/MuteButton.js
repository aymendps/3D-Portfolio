import { IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeMute";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

function MuteButton({ musicVolume, setMusicVolume, disableMuteButton }) {
  const levels = [0.2, 0.1, 0];
  const icons = [
    <VolumeUpIcon fontSize="large" />,
    <VolumeDownIcon fontSize="large" />,
    <VolumeOffIcon fontSize="large" />,
  ];

  return (
    <IconButton
      disabled={disableMuteButton}
      disableRipple
      className="absolute left-2 top-4 z-10 text-white"
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
