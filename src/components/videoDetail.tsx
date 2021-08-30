import React, { memo } from "react";
import { useRecoilValue } from "recoil";
import { selectedVideoAtom } from "../atoms/video.atom";

const VideoDetail = memo(() => {
  const video = useRecoilValue(selectedVideoAtom);
  const {
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
      channelTitle,
      description,
    },
  } = video;
  return (
    <section className="video_detail">
      {" "}
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{title}</h2>
      <h3>{channelTitle}</h3>
      <pre className="whitespace-pre-wrap">{description}</pre>
    </section>
  );
});

export default VideoDetail;
