import { atom } from "recoil";
import { IVideo } from "../interfaces/video.interface";

export const videoAtom = atom<object[]>({
  key: "videoAtom",
  default: [],
});

export const selectedVideoAtom = atom<IVideo | null>({
  key: "selectedVideoAtom",
  default: null,
});
