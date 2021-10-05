import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";

import "./Player.css";
import { SongTime } from "../../models";
import PlayerSlider from "./PlayerSlider";
import PlayerControls from "./PlayerControls";
import { currentStreamState } from "../../store";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentStream = useRecoilValue(currentStreamState);
  const [currentTime, setCurrentTime] = useState<SongTime>({
    currentTime: 0,
    duration: 0,
  });

  // updates the current time for the audio file & PlayerTime component
  const updateTime = () => {
    setCurrentTime({
      currentTime: audioRef.current!.currentTime,
      duration: audioRef.current!.duration,
    });
  };

  return (
    <div className="player-container">
      <div className="player">
        <PlayerSlider audio={audioRef} currentTime={currentTime} setCurrentTime={setCurrentTime} />
        <PlayerControls audio={audioRef} />
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
