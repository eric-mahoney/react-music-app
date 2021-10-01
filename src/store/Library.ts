import { atom, selector } from "recoil";

import { Song as ISong } from "../models";
import { songs } from "../data";

export const librarySongState = atom<ISong[]>({
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
