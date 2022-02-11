interface PlayerTimeProps {
  time: string;
}

const PlayerTime = ({ time }: PlayerTimeProps) => {
  return <p className="player-time">{time}</p>;
};

export default PlayerTime;
