import { RefObject } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faStepForward, faStepBackward } from "@fortawesome/free-solid-svg-icons";

import { currentLibraryLengthState, currentSongIndexState, songPlayingState } from "../../store";

interface PlayerControlsProps {
  audio: RefObject<HTMLAudioElement>;
}

const PlayerControls = ({ audio }: PlayerControlsProps) => {
  const [isPlaying, setIsPlaying] = useRecoilState(songPlayingState);
  const [currentSongIndex, setCurrentSongIndex] = useRecoilState(currentSongIndexState);
  const libraryLength = useRecoilValue(currentLibraryLengthState);

  // handles changing songs and updating the recoil stores
  const changeSongHandler = (direction: string) => {
    if (direction === "forwards") {
      if (currentSongIndex === libraryLength - 1) {
        setCurrentSongIndex(0);
      } else {
        setCurrentSongIndex(currentSongIndex + 1);
      }
    } else {
      if (currentSongIndex === 0) {
        setCurrentSongIndex(libraryLength - 1);
      } else {
        setCurrentSongIndex(currentSongIndex - 1);
      }
    }
    setIsPlaying(false);
  };

  // handles the pausing and playing of the audio files
  const songHandler = () => {
    if (isPlaying) {
      audio.current!.pause();
    } else {
      audio.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player-controls">
      <FontAwesomeIcon icon={faStepBackward} onClick={() => changeSongHandler("backwards")} />
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={songHandler} />
      <FontAwesomeIcon icon={faStepForward} onClick={() => changeSongHandler("forwards")} />
    </div>
  );
};

export default PlayerControls;
