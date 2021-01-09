import react from "react";
import "./LibrarySong.css";

const LibrarySong = ({ song }) => {
  return (
    <div className="song-container">
      <img className="song-image" alt={song.song} src={song.artwork} />
      <div className="song-details">
        <h3 className="song-title">{song.song}</h3>
        <p className="song-artist"> {song.artist}</p>
      </div>
    </div>
  );
};

export default LibrarySong;
