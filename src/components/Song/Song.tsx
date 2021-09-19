import "./Song.css";
import { currentSongState, songPlayingState } from "../../store/Song";

import { useRecoilState, useRecoilValue } from "recoil";

const Song = () => {
  const currentSong = useRecoilValue(currentSongState);
  const [isSongPlaying, setIsSongPlaying] = useRecoilState(songPlayingState);

  const { song, artwork, artist } = currentSong;

  return (
    <div className="current-song">
      <div className={`artwork ${isSongPlaying ? "spinning" : ""}`}>
        <img alt={song} src={artwork} />
      </div>
      <div className="details">
        <h2 className="song">{song}</h2>
        <p className="artist">{artist}</p>
      </div>
    </div>
  );
};

export default Song;
