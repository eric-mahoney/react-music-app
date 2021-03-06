import LibrarySong from "./LibrarySong";
import "./Library.css";

const Library = ({ setLibraryOpen, setIsPlaying, setCurrentSong, setSongs, setStream, songs, currentSong, libraryOpen }) => {
  return (
    <div className={`library-container ${libraryOpen ? "active-library" : ""} `}>
      <button className="close-btn" onClick={() => setLibraryOpen(!libraryOpen)}>
        Close
      </button>
      {songs.map((song) => (
        <LibrarySong
          setIsPlaying={setIsPlaying}
          setCurrentSong={setCurrentSong}
          setLibraryOpen={setLibraryOpen}
          setStream={setStream}
          setSongs={setSongs}
          currentSong={currentSong}
          songs={songs}
          song={song}
          key={song.id}
          id={song.id}
        />
      ))}
    </div>
  );
};

export default Library;
