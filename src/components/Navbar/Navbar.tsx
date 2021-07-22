import "./Navbar.css";
import { libraryOpenState } from "../../store/Library";

import { useRecoilState } from "recoil";

const Navbar = () => {
  const [libraryOpen, setLibraryOpen] = useRecoilState(libraryOpenState);
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <h1 className="logo">Music App</h1>
        <button className="library-btn" onClick={() => setLibraryOpen(!libraryOpen)}>
          Library
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
