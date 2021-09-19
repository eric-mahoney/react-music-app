import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

import "./Player.css";
import { Song } from "../../models";
import { songs } from "../../data";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentSongState,
  getCurrentStream,
  songPlayingState,
} from "../../store";

const Player = () => {
  // hook for controlling the state of the song
  const [currentTime, setCurrentTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  const audioRef = useRef<HTMLAudioElement>(null); // reference to our audio player
  const sliderRef = useRef<HTMLInputElement>(null); // reference to our slider
  const [isPlaying, setIsPlaying] = useRecoilState(songPlayingState);
  const [currentSong, setCurrentSong] = useRecoilState(currentSongState);
  const currentStream = useRecoilValue(getCurrentStream);

  const updateActive = (newSong: Song) => {
    songs.forEach((song) => {
      if (song.id === newSong.id) {
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
  };

  // pauses and plays the music based on the current state
  const songHandler = () => {
    if (isPlaying) {
      audioRef.current!.pause();
    } else {
      audioRef.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  const convertTime = (time: number) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const updateTime = () => {
    setCurrentTime({
      currentTime: audioRef.current!.currentTime,
      duration: audioRef.current!.duration,
    });
  };

  const dragSlider = (e: any) => {
    audioRef.current!.currentTime = e.target.value;
    setCurrentTime({ ...currentTime, currentTime: e.target.value });
  };

  const nextSong = (direction: string) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forwards") {
      const song = songs[(currentIndex + 1) % songs.length];
      setCurrentSong(song);
      updateActive(song);
    } else {
      if (currentIndex === 0) {
        const song = songs[songs.length - 1];
        setCurrentSong(song);
        updateActive(song);
      } else {
        const song = songs[(currentIndex - 1) % songs.length];
        setCurrentSong(song);
        updateActive(song);
      }
    }
    setIsPlaying(false);
  };

  return (
    <div className="player-container">
      <div className="player">
        <div className="timeline-container">
          <p>
            {currentTime.currentTime
              ? convertTime(currentTime.currentTime)
              : "0:00"}
          </p>
          <input
            ref={sliderRef}
            min={0}
            max={currentTime.duration || 0}
            type="range"
            value={currentTime.currentTime || 0}
            className="song-slider"
            onChange={dragSlider}
          ></input>
          <p>
            {currentTime.duration ? convertTime(currentTime.duration) : "0:00"}
          </p>
        </div>
        <div className="player-controls">
          <FontAwesomeIcon
            icon={faStepBackward}
            onClick={() => nextSong("backwards")}
          />
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            onClick={songHandler}
          />
          <FontAwesomeIcon
            icon={faStepForward}
            onClick={() => nextSong("forwards")}
          />
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
