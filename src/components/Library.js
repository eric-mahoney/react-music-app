import LibrarySong from "./LibrarySong";
import "./Library.css";

const Library = ({ songs, currentSong, setCurrentSong, setSongs, setStream, libraryOpen, setLibraryOpen }) => {
  return (
    <div className="library-container">
      <button className="close-btn" onClick={() => setLibraryOpen(!libraryOpen)}>
        Close
      </button>
      {songs.map((song) => (
        <LibrarySong setSongs={setSongs} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} setStream={setStream} songs={songs} song={song} key={song.id} id={song.id} />
      ))}
    </div>
  );
};

export default Library;
