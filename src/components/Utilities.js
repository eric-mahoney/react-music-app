// Lay It On Me - Kasbo
import kasboSong from "../music/LayItOnMe.mp3";
import kasboArtwork from "../music/LayItOnMe.jpg";

const Utilities = () => {
  const songs = [
    {
      id: 1,
      artist: "Kasbo",
      song: "Lay It On Me",
      artwork: kasboArtwork,
      stream: kasboSong,
      active: true,
    },
    {
      id: 2,
      artist: "Blue Wednesday",
      song: "Murmuration",
      artwork: "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-300x300.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=7814",
      active: false,
    },
    {
      id: 3,
      artist: "Ezzy",
      song: "ny90",
      artwork: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-300x300.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=9331",
      active: false,
    },
    {
      id: 4,
      artist: "Aiguille",
      song: "Day and Night",
      artwork: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      active: false,
    },
  ];
  return songs;
};

export default Utilities;
