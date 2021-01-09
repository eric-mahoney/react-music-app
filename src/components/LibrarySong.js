import { faWonSign } from "@fortawesome/free-solid-svg-icons";
import react from "react";
import "./LibrarySong.css";

const LibrarySong = ({ song, setCurrentSong, setStream }) => {
  const selectSongHandler = () => {
    setCurrentSong(song);
    setStream(song.stream);
  };
  return (
    <div className="song-container" id={song.id} onClick={(e) => selectSongHandler(e)}>
      <img className="song-image" alt={song.song} src={song.artwork} />
      <div className="song-details">
        <h3 className="song-title">{song.song}</h3>
        <p className="song-artist"> {song.artist}</p>
      </div>
    </div>
  );
};

export default LibrarySong;
