import { atom, DefaultValue, selector } from "recoil";

import { songs } from "../data";
import { Song } from "../models";

export const songPlayingState = atom<boolean>({
  key: "songPlayingState",
  default: false,
});

export const currentSongIndexState = atom<number>({
  key: "currentSongIndexState",
  default: 0,
});

export const currentSongState = selector<Song>({
  key: "currentSongState",
  get: ({ get }) => {
    const currentSongIndex = get(currentSongIndexState);
    return songs[currentSongIndex];
  },
});

export const getCurrentStream = selector({
  key: "getCurrentStream",
  get: ({ get }) => get(currentSongState).stream,
});
