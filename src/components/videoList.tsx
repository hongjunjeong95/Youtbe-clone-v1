import React, { memo } from "react";
import { useQuery } from "react-query";
import { videosApi } from "../services/videoService";
import VideoItem from "./videoItem";

const VideoList = memo(() => {
  const { data, status, error } = useQuery(
    "most_popular_videos",
    videosApi.mostPopularVideos
  );

  const items = data?.data.items;
  console.log(data);

  return (
    <div className="grid">
      {status === "loading"
        ? "Loading..."
        : items.length !== 0 &&
          items.map((item: any) => (
            <VideoItem key={item.id} title={item.snippet.title} />
          ))}
    </div>
  );
});

export default VideoList;
