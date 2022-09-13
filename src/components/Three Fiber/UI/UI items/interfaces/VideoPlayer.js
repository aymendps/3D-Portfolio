import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

function VideoPlayer({
  width,
  url,
  setMusicVolume,
  musicVolume,
  setDisableMuteButton,
}) {
  const isPlaying = useRef(false);
  const initialMusicVolume = useRef(musicVolume);

  useEffect(() => {
    return () => {
      if (isPlaying.current === true) {
        setMusicVolume(initialMusicVolume.current);
        setDisableMuteButton(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="border-2 border-my-orange-brown bg-my-orange-brown-30 aspect-video"
      style={{ width: width }}
    >
      <ReactPlayer
        controls={true}
        light={true}
        playing={true}
        height="100%"
        width="100%"
        url={url}
        onPlay={() => {
          initialMusicVolume.current = musicVolume;
          isPlaying.current = true;
          setMusicVolume(0);
          setDisableMuteButton(true);
        }}
        onPause={() => {
          isPlaying.current = false;
          setMusicVolume(initialMusicVolume.current);
          setDisableMuteButton(false);
        }}
        onEnded={() => {
          isPlaying.current = false;
          setMusicVolume(initialMusicVolume.current);
          setDisableMuteButton(false);
        }}
      />
    </div>
  );
}

export default VideoPlayer;
