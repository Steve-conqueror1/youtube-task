"use client"
import React from "react";
import { VideoData } from "@/app/types";
import Link from "next/link";

type Props = {
  video: VideoData
}

const VideoItem: React.FC<Props> = (props) => {
  const { video } = props;

  return (
      <div className="h-[236px]  rounded-lg flex flex-col gap-2">
          <div className="relative h-[138px] w-full bg-img" style={{backgroundImage: `url(${video.thumbnail})`}} >
              <Link href={`${process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_LINK}/${video.id}`} className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} target={"_blank"}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                      <path fill="#FF3D00"
                            d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/>
                      <path fill="#FFF" d="M20 31L20 17 32 24z"/>
                  </svg>
              </Link>
          </div>
          <div className="w-full flex flex-col gap-2">
              <h6 className={"overflow-hidden clap clap-1 text-black text-sm leading-4 font-montserrat"}>{video.title}</h6>
              <p className={"overflow-hidden clap clap-1 font-montserrat font-normal text-sm leading-4"}>{video.description}</p>
              <p className={"overflow-hidden clap clap-1 font-montserrat font-normal text-sm leading-4"}>{video.views}</p>
          </div>
      </div>
  );
};

export default VideoItem;
