import React, { memo } from "react";
import { useQuery } from "react-query";
import { videosApi } from "../services/videoService";
import { FormError } from "./form-error";
import VideoItem from "./videoItem";

const VideoList = memo(() => {
  const { data, status, error, isLoading } = useQuery(
    "most_popular_videos",
    videosApi.mostPopularVideos
  );

  const items = data?.data.items;
  console.log(data);

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {isLoading
          ? "Loading..."
          : items.length !== 0 &&
            items.map((item: any) => (
              <VideoItem
                key={item.id}
                title={item.snippet.title}
                url={item.snippet.thumbnails.medium.url}
                author={item.snippet.channelTitle}
              />
            ))}
      </div>
      {status === "error" && error instanceof Error && (
        <FormError errorMessage={error?.message} />
      )}
    </>
  );
});

export default VideoList;
