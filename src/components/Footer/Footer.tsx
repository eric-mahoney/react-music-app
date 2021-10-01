import UpNext from "../UpNext/UpNext";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <UpNext />
      <a href="https://github.com/eric-mahoney/react-music-app" target="_blank" rel="noreferrer">
        view on github
      </a>
    </footer>
  );
};

export default Footer;
