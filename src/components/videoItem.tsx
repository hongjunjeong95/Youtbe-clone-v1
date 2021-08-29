import React, { memo } from "react";

interface IVideoitemProps {
  title: string;
  url: string;
  author: string;
}

const VideoItem: React.FC<IVideoitemProps> = memo(({ title, url, author }) => {
  return (
    <div className="video flex items-center transform hover:scale-105 transition-transform border-gray-400 border">
      <img src={url} alt="Video Thumbnail" className="w-1/3 h-full" />
      <div className="ml-2">
        <h2 className="text">{title}</h2>
        <span className="text-xs">{author}</span>
      </div>
    </div>
  );
});

export default VideoItem;
