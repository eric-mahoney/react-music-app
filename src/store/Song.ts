import { atom, selector } from "recoil";

import { songs } from "../data";
import { Song } from "../models";
import { librarySongState } from "./Library";

export const songPlayingState = atom<boolean>({
  key: "songPlayingState",
  default: false,
});

export const currentSongState = atom<Song>({
  key: "currentSongState",
  default: songs[0],
});

export const getCurrentStream = selector({
  key: "getCurrentStream",
  get: ({ get }) => get(currentSongState).stream,
});
