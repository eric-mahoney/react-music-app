import { ChangeEvent, Dispatch, RefObject, SetStateAction, useRef } from "react";

import { SongTime } from "../../models/Song";
import PlayerTime from "./PlayerTime";

interface PlayerSliderProps {
  audio: RefObject<HTMLAudioElement>;
  currentTime: SongTime;
  setCurrentTime: Dispatch<SetStateAction<SongTime>>;
}

const convertTime = (time: number | null) => {
  if (!time) {
    return "0:00";
  }
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
};

const PlayerSlider = ({ audio, currentTime, setCurrentTime }: PlayerSliderProps) => {
  const slider = useRef<HTMLInputElement>(null);

  // updates the current time for the audio file & PlayerTime component based on the slider being dragged
  const dragSliderHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const sliderValue = Number(e.target.value);
    setCurrentTime({ ...currentTime, currentTime: sliderValue });
    if (audio.current) {
      audio.current.currentTime = sliderValue;
    }
  };

  return (
    <div className="timeline-container">
      <PlayerTime time={convertTime(currentTime.currentTime)} />
      <input
        ref={slider}
        min={0}
        max={currentTime.duration || 0}
        type="range"
        value={currentTime.currentTime || 0}
        className="song-slider"
        onChange={dragSliderHandler}
      ></input>
      <PlayerTime time={convertTime(currentTime.duration)} />
    </div>
  );
};

export default PlayerSlider;
