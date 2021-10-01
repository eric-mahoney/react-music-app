import { useRecoilValue } from "recoil";
import { upNextSongState } from "../../store";

const UpNext = () => {
  const upNextSong = useRecoilValue(upNextSongState);
  return (
    <p>
      Up next: {upNextSong.song} - {upNextSong.artist}
    </p>
  );
};

export default UpNext;
