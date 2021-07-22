import { useRecoilState } from "recoil";
import { Song } from "../../models";
import { currentSongState } from "../../store/Song";
import "./LibrarySong.css";

interface LibrarySongProps {
  song: Song;
  id: number;
}

// const selectSongHandler = () => {
//   setCurrentSong(song);
//   setStream(song.stream);
//   const selectedSong = songs.map((song) => {
//     if (song.id === id) {
//       return {
//         ...song,
//         active: true,
//       };
//     } else {
//       return {
//         ...song,
//         active: false,
//       };
//     }
//   });
//   setSongs(selectedSong);
//   setIsPlaying(false);
//   setLibraryOpen(false);
// };

const LibrarySong = ({ song, id }: LibrarySongProps) => {
  return (
    <div className={`song-container ${song.active ? "active-song" : ""}`} id={String(id)}>
      <img className="song-image" alt={song.song} src={song.artwork} />
      <div className="song-details">
        <h3 className="song-title">{song.song}</h3>
        <p className="song-artist"> {song.artist}</p>
      </div>
    </div>
  );
};

export default LibrarySong;
