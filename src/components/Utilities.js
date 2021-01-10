// Lay It On Me - Kasbo
import kasboSong from "../music/LayItOnMe.mp3";
import kasboArtwork from "../music/LayItOnMe.jpg";

const Utilities = () => {
  const songs = [
    {
      id: 0,
      artist: "Kasbo",
      song: "Lay It On Me",
      artwork: kasboArtwork,
      stream: kasboSong,
      active: true,
    },
    {
      id: 1,
      artist: "Blue Wednesday",
      song: "Murmuration",
      artwork: "https://chillhop.com/wp-content/uploads/2020/07/bb0db71fd74f15627e9912ad2278c13cee72ac2d-300x300.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=7814",
      active: false,
    },
    {
      id: 2,
      artist: "Ezzy",
      song: "ny90",
      artwork: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-300x300.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=9331",
      active: false,
    },
    {
      id: 3,
      artist: "Aiguille",
      song: "Day and Night",
      artwork: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      active: false,
    },
    {
      id: 4,
      artist: "Makzo",
      song: "Departure",
      artwork: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=11771",
      active: false,
    },
    {
      id: 5,
      artist: "Swørn",
      song: "Going Back",
      artwork: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      active: false,
    },
    {
      id: 6,
      artist: "Philanthrope",
      song: "Serendipity",
      artwork: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=10249",
      active: false,
    },
    {
      id: 7,
      artist: "Toonorth",
      song: "Foggy Road",
      artwork: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=7834",
      active: false,
    },
    {
      id: 8,
      artist: "Mo Anando",
      song: "Yesterday",
      artwork: "https://chillhop.com/wp-content/uploads/2020/07/b6e48e6cfb2a90723b9cf1b108a6d305f9204eb4-1024x1024.jpg",
      stream: "https://mp3.chillhop.com/serve.php/?mp3=9281",
      active: false,
    },
  ];
  return songs;
};

export default Utilities;
