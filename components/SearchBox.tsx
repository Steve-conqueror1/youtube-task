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
    <div className="flex gap-6 flex-col w-full">
      <h6 className="text-black font-normal leading-[53px] text-center text-[36px] font-montserrat">
        Поиск видео
      </h6>
      <div className="flex flex-col gap-8 w-full">
        <Search handleSetVideos={handleSetVideos} />
        {videos && <VideoList videos={videos} />}
      </div>
    </div>
  );
};

export default SearchBox;
