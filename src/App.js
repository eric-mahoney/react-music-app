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
  const [stream, setStream] = useState(currentSong.stream);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar setLibraryOpen={setLibraryOpen} libraryOpen={libraryOpen} />
      <Library
        setLibraryOpen={setLibraryOpen}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        setStream={setStream}
        setSongs={setSongs}
        libraryOpen={libraryOpen}
        currentSong={currentSong}
        songs={songs}
      />
      <CurrentSong isPlaying={isPlaying} currentSong={currentSong} libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} setStream={setStream} stream={stream} currentSong={currentSong} setCurrentSong={setCurrentSong} setSongs={setSongs} songs={songs} />
      <footer className="footer">
        <a href="https://github.com/eric-mahoney/react-music-app" target="_blank" rel="noreferrer">
          view on github
        </a>
      </footer>
    </div>
  );
};

export default App;
