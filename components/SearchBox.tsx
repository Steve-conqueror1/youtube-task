"use client";
import React from "react";
import Search from "./Search";
import VideoList from "./VideoList";
import {VideoInfo} from "@/app/types";

const SearchBox = () => {
  const [videos, setVideos] = React.useState<null | VideoInfo>(null);

  const handleSetVideos = (videos: VideoInfo | null) => {
    setVideos(videos);
  };

  return (
    <div className="flex gap-4 flex-col w-full">
      <h6 className={`text-black font-normal   font-montserrat ${!videos? "text-center text-4xl leading-[53px]" : "text-[28px]"}`}>
        Поиск видео
      </h6>
      <div className="flex flex-col gap-6 w-full">
        <Search handleSetVideos={handleSetVideos} videosAvailable={Boolean(videos)} />
        {videos && <VideoList videos={videos} />}
      </div>
    </div>
  );
};

export default SearchBox;
