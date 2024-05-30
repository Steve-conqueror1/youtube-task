"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type FormProps = {
  email: "string";
  password: "string";
};

const LoginForm = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormProps>();

  const handleLogin: SubmitHandler<FormProps> = async (data: FormProps) => {
    console.log("---login data---", data);
    router.push("/");
  };

  return (
    <div
      className={
        "w-full max-w-[510px] h-full max-h-[520px] flex flex-col items-center  bg-[rgba(39, 39, 39, 0.1)] rounded-[5px] border py-8 bg-gray-300"
      }
    >
      <div className="w-full flex flex-col gap-4">
        <div className="w-full h-[85px] flex flex-col justify-center items-center">
          <Image
            src={"/icons/logo.svg"}
            alt={"login"}
            width={31.45}
            height={68.42}
          />
        </div>
        <h2 className={"font-montserrat font-bold text-lg text-center"}>
          Вход
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className={`flex items-center mx-auto flex-col gap-8 flex-1 justify-center w-full`}
      >
        <div className="grid w-full max-w-[334px] items-center gap-1.5">
          <Label
            {...register("email")}
            className={"font-roboto text-[16px] leading-[22px] text-gray-700"}
            htmlFor="email"
          >
            Логин
          </Label>
          <Input
            required
            className={
              "w-full focus-visible:ring-0 focus-visible:bg-gray-400 input-class h-[48px] border border-gray-800"
            }
            type="email"
            id="email"
            placeholder="Логин"
          />
        </div>
        <div className="grid w-full max-w-[334px] items-center gap-1.5">
          <Label
            className={"font-roboto text-[16px] leading-[22px] text-gray-700"}
            htmlFor="password"
          >
            Пароль
          </Label>
          <Input
            {...register("password")}
            required
            className={
              "w-full focus-visible:ring-0 focus-visible:bg-gray-400 input-class h-[48px] border border-gray-800"
            }
            type="password"
            id="password"
            placeholder="Пароль"
          />
        </div>
        <div className="flex w-full max-w-[334px] justify-center">
          <Button
            className={
              "w-full max-w-[176px] h-[52px] rounded-[5px] bg-yellow-500  font-roboto text-black font-normal  text-xl leading-6 text-center"
            }
          >
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
