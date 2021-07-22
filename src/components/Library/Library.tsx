import LibrarySong from "./LibrarySong";
import "./Library.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { libraryOpenState, librarySongState } from "../../store/Library";

const Library = () => {
  const [libraryOpen, setLibraryOpen] = useRecoilState(libraryOpenState);
  const songs = useRecoilValue(librarySongState);

  return (
    <div className={`library-container ${libraryOpen ? "active-library" : ""} `}>
      <button className="close-btn" onClick={() => setLibraryOpen(!libraryOpen)}>
        Close
      </button>
      {songs.map((song) => (
        <LibrarySong song={song} key={song.id} id={song.id} />
      ))}
    </div>
  );
};

export default Library;
