import { atom, selector } from "recoil";
import { librarySongState } from "./Library";

export const currentSongState = selector({
  key: "currentSongState",
  get: ({ get }) => get(librarySongState).filter((song) => song.active === true),
});

export const songPlayingState = atom({
  key: "songPlayingState",
  default: false,
});
