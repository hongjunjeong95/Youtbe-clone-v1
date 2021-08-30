export interface IVideo {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: { url: string };
    };
    channelTitle: string;
    description: string;
  };
}
