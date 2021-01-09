import "./CurrentSong.css";

const CurrentSong = ({ currentSong }) => {
  const artist = currentSong.artist;
  const song = currentSong.song;
  const artwork = currentSong.artwork;

  return (
    <div className="currentsong-container">
      <div className="artwork">
        <img src={artwork} />
      </div>
      <div className="details">
        <h2 className="artist">{artist}</h2>
        <p className="song">{song}</p>
      </div>
    </div>
  );
};

export default CurrentSong;
