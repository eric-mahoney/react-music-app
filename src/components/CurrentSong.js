import "./CurrentSong.css";

const CurrentSong = ({ currentSong, libraryOpen, setLibraryOpen }) => {
  const artist = currentSong.artist;
  const song = currentSong.song;
  const artwork = currentSong.artwork;

  return (
    <div className="currentsong-container">
      <div className="artwork">
        <img src={artwork} />
      </div>
      <div className="details">
        <h2 className="song">{song}</h2>
        <p className="artist">{artist}</p>
      </div>
    </div>
  );
};

export default CurrentSong;
