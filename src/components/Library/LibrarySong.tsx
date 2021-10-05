import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";

import "./LibrarySong.css";
import { Song } from "../../models";
import { currentSongIndexState, songPlayingState } from "../../store";
import { libraryOpenState } from "../../store/Library";

interface LibrarySongProps {
  song: Song;
  id: number;
}

const LibrarySong = ({ song, id }: LibrarySongProps) => {
  const [currentSongIndex, setCurrentSongIndex] = useRecoilState(currentSongIndexState);
  const resetPlayingState = useResetRecoilState(songPlayingState);
  const setIsLibraryOpen = useSetRecoilState(libraryOpenState);
  const isActiveSong = currentSongIndex === id;

  // updates the current song index, closes the library popout, and changing the song playing state to false
  const selectSongHandler = (index: number) => {
    setCurrentSongIndex(index);
    setIsLibraryOpen(false);
    resetPlayingState();
  };

  return (
    <div
      className={`song-container ${isActiveSong ? "active-song" : ""}`}
      id={`${id}`}
      onClick={() => selectSongHandler(id)}
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
