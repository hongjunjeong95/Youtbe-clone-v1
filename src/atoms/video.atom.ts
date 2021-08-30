import { atom } from "recoil";

export const videoAtom = atom<object[]>({
  key: "videoAtom",
  default: [],
});
