import "./App.css";
import Footer from "./components/Footer/Footer";
import Library from "./components/Library/Library";
import Navbar from "./components/Navbar/Navbar";
import Song from "./components/Song/Song";
import Player from "./components/Player/Player";

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
