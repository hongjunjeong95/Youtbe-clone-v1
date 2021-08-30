import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";

import reportWebVitals from "./reportWebVitals";
import "./styles/styles.css";
import App from "./components/app";
import Youtube from "./services/videoService";
import { RecoilRoot } from "recoil";

dotenv.config();

export const queryClient = new QueryClient();

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY ?? "");

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RecoilRoot>
          <App youtube={youtube} />
        </RecoilRoot>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
