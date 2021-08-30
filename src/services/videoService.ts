import axios from "axios";

class Youtube {
  private readonly url = "https://youtube.googleapis.com/youtube/v3/";
  constructor(private readonly youtubeApiKey: string) {}

  private readonly api = axios.create({
    baseURL: this.url,
    params: {
      key: this.youtubeApiKey,
      part: "snippet",
    },
  });

  async mostPopularVideos() {
    const response = await this.api.get("videos", {
      params: {
        chart: "mostPopular",
        maxResults: 25,
      },
    });

    const result = response.data;
    return result.items;
  }

  async searchVideos(query: string) {
    const response = await this.api.get("search", {
      params: {
        q: query,
        maxResults: 25,
      },
    });

    const result = response.data;
    return result.items;
  }
}

export default Youtube;
