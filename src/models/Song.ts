export interface Song {
  id: number;
  artist: string;
  song: string;
  artwork: string;
  stream: string;
  active: boolean;
}

export interface SongTime {
  duration: number;
  currentTime: number;
}
