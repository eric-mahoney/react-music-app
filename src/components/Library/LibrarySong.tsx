import { useRecoilState, useSetRecoilState } from "recoil";
import { Song } from "../../models";
import { libraryOpenState, librarySongState } from "../../store/Library";
import "./LibrarySong.css";

interface LibrarySongProps {
  song: Song;
  id: number;
}

function updateLibrary(id: number, library: Song[]) {
  return library.map((song: Song) => {
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
}

const LibrarySong = ({ song, id }: LibrarySongProps) => {
  const [librarySongs, setLibrarySongs] = useRecoilState(librarySongState);
  const setIsLibraryOpen = useSetRecoilState(libraryOpenState);

  const selectSongHandler = () => {
    const updatedLibrary = updateLibrary(id, librarySongs);
    setLibrarySongs(updatedLibrary);
    setIsLibraryOpen(false);
  };

  return (
    <div
      className={`song-container ${song.active ? "active-song" : ""}`}
      id={String(id)}
      onClick={() => selectSongHandler()}
    >
      <img className="song-image" alt={song.song} src={song.artwork} />
      <div className="song-details">
        <h3 className="song-title">{song.song}</h3>
        <p className="song-artist"> {song.artist}</p>
      </div>
    </div>
  );
};

export default LibrarySong;
