import React, { memo } from "react";

interface IVideoitemProps {
  video: object;
}

const VideoItem: React.FC<IVideoitemProps> = memo(({ video }) => {
  const {
    //@ts-ignore
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
      channelTitle,
    },
  } = video;

  return (
    <li className="video flex items-center transform hover:scale-105 transition-transform border-gray-400 border">
      <img src={url} alt="Video Thumbnail" className="w-1/3 h-full" />
      <div className="ml-2">
        <h2 className="text">{title}</h2>
        <span className="text-xs">{channelTitle}</span>
      </div>
    </li>
  );
});

export default VideoItem;
