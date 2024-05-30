import React from "react";
import Image from "next/image";
import { VideoInfo} from "@/app/types";
import VideoItem from "./VideoItem";

type Props = {
  videos: VideoInfo;
};

const VideoList: React.FC<Props> = (props) => {
  const { videos } = props;

  return (
    <div className="w-full flex flex-col pt-4 gap-4">
      <div className="flex justify-between items-center">
        <h6 className="font-normal font-montserrat leading-6 text-base text-black">
          Видео по запросу «чем кормить кота»{" "}
          <span className="text-gray-700">{"     "}{videos.pageInfo.totalResults}</span>
        </h6>
        <div className="flex gap-2">
          <Image src="/icons/list.svg" alt="list" width={24} height={24} />
          <Image src="/icons/grid.svg" alt="list" width={24} height={24} />
        </div>
      </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4  lg:gap-4 w-full">
             {videos.data.map((video, index) => (
                 <VideoItem video={video}  key={video.id} />
             ))}
        </div>
    </div>
  );
};

export default VideoList;
