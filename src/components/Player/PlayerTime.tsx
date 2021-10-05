interface PlayerTimeProps {
  time: string;
}

const PlayerTime = ({ time }: PlayerTimeProps) => {
  return <p>{time}</p>;
};

export default PlayerTime;
