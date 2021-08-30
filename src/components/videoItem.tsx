import React, { memo } from "react";
import { useSetRecoilState } from "recoil";
import { selectedVideoAtom } from "../atoms/video.atom";
import { IVideo } from "../interfaces/video.interface";

interface IVideoitemProps {
  video: IVideo;
}

const VideoItem: React.FC<IVideoitemProps> = memo(({ video }) => {
  const setSelectedVideoAtom = useSetRecoilState(selectedVideoAtom);

  const {
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
      channelTitle,
    },
  } = video;

  const onClick = () => {
    setSelectedVideoAtom(video);
  };

  return (
    <li
      className="video flex items-center transform hover:scale-105 transition-transform border-gray-400 border cursor-pointer"
      onClick={onClick}
    >
      <img src={url} alt="Video Thumbnail" className="w-1/3 h-full" />
      <div className="ml-2">
        <h2 className="text">{title}</h2>
        <span className="text-xs">{channelTitle}</span>
      </div>
    </li>
  );
});

export default VideoItem;
