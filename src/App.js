import "./App.css";
import CurrentSong from "./components/CurrentSong";
import Library from "./components/Library";
import Player from "./components/Player";
import Utilities from "./components/Utilities";
import Navbar from "./components/Navbar";

import { useState } from "react";

const App = () => {
  const songList = Utilities();
  const [songs, setSongs] = useState(songList);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [songIndex, setSongIndex] = useState(0);
  const [stream, setStream] = useState(currentSong.stream);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar setLibraryOpen={setLibraryOpen} libraryOpen={libraryOpen} />
      <Library
        setLibraryOpen={setLibraryOpen}
        libraryOpen={libraryOpen}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        setIsPlaying={setIsPlaying}
        setStream={setStream}
        setSongs={setSongs}
        songs={songs}
      />
      <CurrentSong isPlaying={isPlaying} currentSong={currentSong} libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} stream={stream} />
    </div>
  );
};

export default App;
