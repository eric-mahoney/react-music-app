import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

import { useRef, useEffect, useState } from "react";

import "./Player.css";

const Player = ({ stream, setStream, isPlaying, setIsPlaying, currentSong, setCurrentSong, setSongs, songs }) => {
  // hook for controlling the state of the song
  const [currentTime, setCurrentTime] = useState({
    currentTime: null,
    duration: null,
  });
  const audioRef = useRef(null); // reference to our audio player
  const sliderRef = useRef(null); // reference to our slider

  useEffect(() => {
    const selectedSong = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(selectedSong);
  }, [currentSong]);

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

  const nextSong = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forwards") {
      const song = songs[(currentIndex + 1) % songs.length];
      setCurrentSong(song);
      setStream(song.stream);
    } else {
      if (currentIndex === 0) {
        const song = songs[songs.length - 1];
        setCurrentSong(song);
        setStream(song.stream);
      } else {
        const song = songs[(currentIndex - 1) % songs.length];
        setCurrentSong(song);
        setStream(song.stream);
      }
    }
    setIsPlaying(false);
  };

  return (
    <div className="player-container">
      <div className="player">
        <div className="timeline-container">
          <p>{currentTime.currentTime ? convertTime(currentTime.currentTime) : "0:00"}</p>
          <input ref={sliderRef} min={0} max={currentTime.duration || 0} type="range" value={currentTime.currentTime || 0} className="song-slider" onChange={dragSlider}></input>
          <p>{currentTime.duration ? convertTime(currentTime.duration) : "0:00"}</p>
        </div>
        <div className="player-controls">
          <FontAwesomeIcon icon={faStepBackward} onClick={() => nextSong("backwards")} />
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} onClick={songHandler} />
          <FontAwesomeIcon icon={faStepForward} onClick={() => nextSong("forwards")} />
        </div>
        <audio ref={audioRef} onTimeUpdate={updateTime} onLoadedMetadata={updateTime} src={stream} id="song-player"></audio>
      </div>
    </div>
  );
};

export default Player;
