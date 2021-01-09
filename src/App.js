import "./App.css";
import CurrentSong from "./components/CurrentSong";
import Library from "./components/Library";
import Player from "./components/Player";
import Utilities from "./components/Utilities";

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
      {libraryOpen && <Library songs={songs} libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />}
      <button onClick={() => setLibraryOpen(!libraryOpen)}>Library</button>
      <CurrentSong currentSong={currentSong} />
      <Player
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songIndex={songIndex}
        setSongIndex={setSongIndex}
        stream={stream}
        setStream={setStream}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default App;
