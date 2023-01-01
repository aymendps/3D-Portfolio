import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

function VideoPlayer({
  width,
  height,
  url,
  setMusicVolume,
  musicVolume,
  setDisableMuteButton,
  aspectVideo = true,
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
      className={
        "border-2 rounded border-my-brown bg-my-brown overflow-hidden" +
        (aspectVideo ? " aspect-video" : "")
      }
      style={{ width: width, height: height }}
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
