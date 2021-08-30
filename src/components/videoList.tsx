import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import { videoAtom } from "../atoms/video.atom";
import VideoItem from "./videoItem";

const VideoList = memo(() => {
  const videos = useRecoilValue(videoAtom);

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {videos.map((video: any) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </>
  );
});

export default VideoList;
