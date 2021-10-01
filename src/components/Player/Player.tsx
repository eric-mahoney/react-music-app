import { ChangeEvent, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faStepForward, faStepBackward } from "@fortawesome/free-solid-svg-icons";

import "./Player.css";
import { currentLibraryLengthState, currentSongIndexState, currentStreamState, songPlayingState } from "../../store";

const convertTime = (time: number) => {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
};

const Player = () => {
  const [currentTime, setCurrentTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [isPlaying, setIsPlaying] = useRecoilState(songPlayingState);
  const [currentSongIndex, setCurrentSongIndex] = useRecoilState(currentSongIndexState);
  const libraryLength = useRecoilValue(currentLibraryLengthState);
  const currentStream = useRecoilValue(currentStreamState);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  const songHandler = () => {
    if (isPlaying) {
      audioRef.current!.pause();
    } else {
      audioRef.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    setCurrentTime({
      currentTime: audioRef.current!.currentTime,
      duration: audioRef.current!.duration,
    });
  };

  const dragSlider = (e: ChangeEvent<HTMLInputElement>) => {
    const sliderValue = Number(e.target.value);
    setCurrentTime({ ...currentTime, currentTime: sliderValue });
    if (audioRef.current) {
      audioRef.current.currentTime = sliderValue;
    }
  };

  const changeSong = (direction: string) => {
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

  return (
    <div className="player-container">
      <div className="player">
        <div className="timeline-container">
          <p>{currentTime.currentTime ? convertTime(currentTime.currentTime) : "0:00"}</p>
          <input
            ref={sliderRef}
            min={0}
            max={currentTime.duration || 0}
            type="range"
            value={currentTime.currentTime || 0}
            className="song-slider"
            onChange={dragSlider}
          ></input>
          <p>{currentTime.duration ? convertTime(currentTime.duration) : "0:00"}</p>
        </div>
        <div className="player-controls">
          <FontAwesomeIcon icon={faStepBackward} onClick={() => changeSong("backwards")} />
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={songHandler} />
          <FontAwesomeIcon icon={faStepForward} onClick={() => changeSong("forwards")} />
        </div>
        <audio
          ref={audioRef}
          onTimeUpdate={updateTime}
          onLoadedMetadata={updateTime}
          src={currentStream}
          id="song-player"
        ></audio>
      </div>
    </div>
  );
};

export default Player;
