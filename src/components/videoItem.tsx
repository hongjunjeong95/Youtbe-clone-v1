import React, { memo } from "react";

interface IVideoitemProps {
  title: string;
}

const VideoItem: React.FC<IVideoitemProps> = memo(({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
});

export default VideoItem;
