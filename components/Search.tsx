"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import {VideoInfo} from "@/app/types";

type FormProps = {
  search: "string";
};

type Props = {
  handleSetVideos: (videos: VideoInfo | null) => void;
};

const Search: React.FC<Props> = (props) => {
  const { handleSetVideos } = props;

  const { register, handleSubmit } = useForm<FormProps>();

  const handleSearch: SubmitHandler<FormProps> = async (data: FormProps) => {
    try {
      const res = await axios.get(`/api/search?query=${data.search}`)
      const responseData =  res.data;
      handleSetVideos(responseData);
    } catch (error) {
      handleSetVideos(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="flex w-[686px] items-center mx-auto"
    >
      <Input
        {...register("search")}
        className="input-class h-[52px]  focus-visible:ring-0 w-[536px] focus-visible:bg-gray-400"
        type="text"
        placeholder="Что хотите посмотреть?"
      />
      <Button
        className="bg-yellow-500 w-[150px] h-[52px] flex justify-center items-center font-montserrat text-black rounded-r-[5px]"
        type="submit"
      >
        Найти
      </Button>
    </form>
  );
};

export default Search;
