import { useCallback } from "react";

function BackgroundMusic({
  startMusic,
  musicVolume,
  musicTrackIndex,
  getNextMusicTrack,
}) {
  const PLAYLIST = [
    process.env.PUBLIC_URL + "/assets/audio/noire.mp3",
    process.env.PUBLIC_URL + "/assets/audio/midnight.mp3",
    process.env.PUBLIC_URL + "/assets/audio/bleak.mp3",
  ];

  const musicRef = useCallback(
    (node) => {
      if (node !== null && startMusic === true) {
        node.volume = musicVolume;
        if (musicVolume === 0) {
          node.pause();
        } else {
          node.play();
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [startMusic, musicVolume, musicTrackIndex]
  );

  return (
    <audio
      onEnded={getNextMusicTrack}
      type="audio"
      src={PLAYLIST[musicTrackIndex % PLAYLIST.length]}
      ref={musicRef}
    />
  );
}

export default BackgroundMusic;
