import "./LibrarySong.css";

const LibrarySong = ({ setSongs, setIsPlaying, setLibraryOpen, setCurrentSong, setStream, song, songs, currentSong, id }) => {
  const selectSongHandler = () => {
    setCurrentSong(song);
    setStream(song.stream);
    const selectedSong = songs.map((song) => {
      if (song.id === id) {
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
    setIsPlaying(false);
    setLibraryOpen(false);
  };
  return (
    <div className={`song-container ${song.active ? "active-song" : ""}`} id={song.id} onClick={(e) => selectSongHandler(e)}>
      <img className="song-image" alt={song.song} src={song.artwork} />
      <div className="song-details">
        <h3 className="song-title">{song.song}</h3>
        <p className="song-artist"> {song.artist}</p>
      </div>
    </div>
  );
};

export default LibrarySong;
