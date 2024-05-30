"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { VideoInfo } from "@/app/types";
import { cn } from "@/lib/utils";

type FormProps = {
  search: "string";
};

type Props = {
  handleSetVideos: (videos: VideoInfo | null) => void;
  videosAvailable: boolean;
};

const Search: React.FC<Props> = (props) => {
  const { handleSetVideos, videosAvailable } = props;

  const { register, handleSubmit } = useForm<FormProps>();

  const handleSearch: SubmitHandler<FormProps> = async (data: FormProps) => {
    try {
      const res = await axios.get(`/api/search?query=${data.search}`);
      const responseData = res.data;
      handleSetVideos(responseData);
      console.log("-----res----", res)
    } catch (error) {
      handleSetVideos(null);
      console.log("-----error----", error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className={`flex items-center mx-auto  ${
        videosAvailable ? "w-full" : "w-[686px]"
      }`}
    >
      <Input
        {...register("search")}
        className={`input-class h-[52px]  focus-visible:ring-0 focus-visible:bg-gray-400 relative border-gray-300`}
        type="text"
        placeholder="Что хотите посмотреть?"
      />
      <Button
        className="bg-yellow-500 w-[150px] h-[52px] flex justify-center items-center font-montserrat text-black rounded-r-[5px] relative"
        type="submit"
      >
        {videosAvailable ? (
          <svg
            className={
              "absolute left-0 top-1/2 -translate-x-[190%] -translate-y-1/2 cursor-pointer"
            }
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8401 2.60999C20.3294 2.099 19.7229 1.69364 19.0555 1.41708C18.388 1.14052 17.6726 0.998169 16.9501 0.998169C16.2276 0.998169 15.5122 1.14052 14.8448 1.41708C14.1773 1.69364 13.5709 2.099 13.0601 2.60999L12.0001 3.66999L10.9401 2.60999C9.90843 1.5783 8.50915 0.998704 7.05012 0.998704C5.59109 0.998704 4.19181 1.5783 3.16012 2.60999C2.12843 3.64169 1.54883 5.04096 1.54883 6.49999C1.54883 7.95903 2.12843 9.3583 3.16012 10.39L4.22012 11.45L12.0001 19.23L19.7801 11.45L20.8401 10.39C21.3511 9.87924 21.7565 9.27281 22.033 8.60535C22.3096 7.93789 22.4519 7.22248 22.4519 6.49999C22.4519 5.77751 22.3096 5.0621 22.033 4.39464C21.7565 3.72718 21.3511 3.12075 20.8401 2.60999V2.60999Z"
              stroke="#F65980"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
        Найти
      </Button>
    </form>
  );
};

export default Search;
