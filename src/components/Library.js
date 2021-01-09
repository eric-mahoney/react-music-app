import LibrarySong from "./LibrarySong";
import "./Library.css";

const Library = ({ songs, libraryOpen, setLibraryOpen }) => {
  return (
    <div className="library-container">
      <button onClick={() => setLibraryOpen(!libraryOpen)}>close</button>
      {songs.map((song) => (
        <LibrarySong song={song} />
      ))}
    </div>
  );
};

export default Library;
