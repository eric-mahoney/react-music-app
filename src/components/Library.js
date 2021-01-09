import LibrarySong from "./LibrarySong";
import "./Library.css";

const Library = ({ songs, setCurrentSong, setStream }) => {
  return (
    <div className="library-container">
      {songs.map((song) => (
        <LibrarySong setCurrentSong={setCurrentSong} setStream={setStream} songs={songs} song={song} key={song.id} id={song.id} />
      ))}
    </div>
  );
};

export default Library;
