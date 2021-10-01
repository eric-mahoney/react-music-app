import { atom, selector } from "recoil";
import { currentSongIndexState } from "./Song";

import { songs } from "../data";
import { Song } from "../models";

export const librarySongState = atom<Song[]>({
  key: "librarySongState",
  default: songs,
});

export const libraryOpenState = atom<boolean>({
  key: "libraryOpenState",
  default: false,
});

export const currentLibraryLengthState = selector({
  key: "currentLibraryLength",
  get: ({ get }) => get(librarySongState).length,
});

export const upNextSongState = selector({
  key: "upNextSongState",
  get: ({ get }) => {
    const library = get(librarySongState);
    const libraryLength = get(currentLibraryLengthState);
    const currentSongIndex = get(currentSongIndexState);

    if (currentSongIndex === libraryLength - 1) {
      return library[0];
    } else {
      return library[currentSongIndex + 1];
    }
  },
});
