import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import { selectedVideoAtom, videoAtom } from "../atoms/video.atom";
import VideoItem from "./videoItem";

const VideoList = memo(() => {
  const videos = useRecoilValue(videoAtom);
  const selectedVideo = useRecoilValue(selectedVideoAtom);

  return (
    <>
      <ul
        className={`${
          !!selectedVideo ? "video_list" : "grid grid-cols-2 gap-2"
        }`}
      >
        {videos.map((video: any) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </ul>
    </>
  );
});

export default VideoList;
