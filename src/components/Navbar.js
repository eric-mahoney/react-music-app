import "./Navbar.css";

const Navbar = ({ setLibraryOpen, libraryOpen }) => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <h1 className="logo">Mahoney Music App</h1>
        <button className="library-btn" onClick={() => setLibraryOpen(!libraryOpen)}>
          Library
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
