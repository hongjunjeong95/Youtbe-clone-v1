import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/header";
import VideoList from "../components/videoList";

const Home = memo(() => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header></Header>
      <VideoList></VideoList>
    </div>
  );
});

export default Home;
