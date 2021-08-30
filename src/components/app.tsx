import React from "react";
import Youtube from "../services/videoService";
import Router from "./router";

interface IAppProps {
  youtube: Youtube;
}

const App: React.FC<IAppProps> = ({ youtube }) => {
  return <Router youtube={youtube} />;
};

export default App;
