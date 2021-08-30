import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { videoAtom } from "../atoms/video.atom";
import { FormError } from "../components/form-error";
import Header from "../components/header";
import VideoList from "../components/videoList";
import Youtube from "../services/videoService";

interface IRouterProps {
  youtube: Youtube;
}

const Home: React.FC<IRouterProps> = memo(({ youtube }) => {
  const setVideos = useSetRecoilState(videoAtom);
  const onSearch = (query: string) => {
    youtube
      .searchVideos(query) //
      .then((videos) => setVideos(videos));
  };

  const { isLoading, error, status } = useQuery(
    ["most_popular_videos"],
    () => youtube.mostPopularVideos(),
    {
      onError: (error) => console.log(error),
      onSuccess: (data) => setVideos(data),
    }
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header onSearch={onSearch} youtube={youtube} />
      {isLoading ? "Loading..." : <VideoList />}
      {status === "error" && error instanceof Error && (
        <FormError errorMessage={error.message} />
      )}
    </div>
  );
});

export default Home;
