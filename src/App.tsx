import "./App.css";
import Song from "./components/Song/Song";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Player from "./components/Player/Player";
import Library from "./components/Library/Library";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Library />
      <Song />
      <Player />
      <Footer />
    </div>
  );
};

export default App;
