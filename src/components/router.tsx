import React, { memo } from "react";
import { BrowserRouter as BRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Youtube from "../services/videoService";

interface IRouterProps {
  youtube: Youtube;
}

const Router: React.FC<IRouterProps> = memo(({ youtube }) => {
  return (
    <BRouter>
      <Switch>
        <Route path="/" component={() => <Home youtube={youtube} />}></Route>
      </Switch>
    </BRouter>
  );
});

export default Router;
