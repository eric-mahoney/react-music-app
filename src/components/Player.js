import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

import { useRef, useEffect, useState } from "react";

import "./Player.css";

const Player = ({ songs, currentSong, setCurrentSong, songIndex, setSongIndex, stream, setStream, isPlaying, setIsPlaying }) => {
  // hook for controlling the state of the song
  const [currentTime, setCurrentTime] = useState({
    currentTime: null,
    duration: null,
  });
  const audioRef = useRef(null); // reference to our audio player
  const sliderRef = useRef(null); // reference to our slider

  // pauses and plays the music based on the current state
  const songHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const convertTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  };

  const updateTime = () => {
    setCurrentTime({ currentTime: audioRef.current.currentTime, duration: audioRef.current.duration });
  };

  const dragSlider = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime({ ...currentTime, currentTime: e.target.value });
  };

  return (
    <div className="player-container">
      <div className="player">
        <div class="timeline-container">
          <p>{convertTime(currentTime.currentTime)}</p>
          <input ref={sliderRef} min={0} max={currentTime.duration} type="range" value={currentTime.currentTime} className="song-timeline" onChange={dragSlider}></input>
          <p>{convertTime(currentTime.duration)}</p>
        </div>
        <div className="player-controls">
          <FontAwesomeIcon icon={faStepBackward} />
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={songHandler} />
          <FontAwesomeIcon icon={faStepForward} />
        </div>
        <audio ref={audioRef} onTimeUpdate={updateTime} onLoadedMetadata={updateTime} src={stream} id="song-player"></audio>
      </div>
    </div>
  );
};

export default Player;
