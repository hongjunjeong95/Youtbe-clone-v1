import React, { memo } from "react";
import { useQuery } from "react-query";
import { videosApi } from "../services/videoService";

const VideoList = memo(() => {
  const { data, isLoading, status, error } = useQuery(
    "most_popular_videos",
    videosApi.mostPopularVideos
  );

  return <div className="grid">VideoList</div>;
});

export default VideoList;
