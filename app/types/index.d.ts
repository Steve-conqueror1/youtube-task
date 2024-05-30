export type VideoData = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  views: string;
}

export type PageInfo = {
  resultsPerPage:number,
  totalResults: number
}

export type VideoInfo = {
   data: VideoData[],
   pageInfo: PageInfo
};
