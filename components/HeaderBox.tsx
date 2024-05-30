"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

const HeaderBox = () => {
  const path = usePathname();
  const router = useRouter();

  const handleLogout = () => {
     router.push("/sign-in")
  }

  return (
    <header className="bg-white w-full h-[80px] flex flex-col justify-center border-b border-gray-200">
      <div className="container flex justify-between items-center h-full">
        <ul className="flex gap-12 items-center h-full">
          <li
            className={`navLink ${
              path.substring(0) === "/" ? "navActive" : "navDefault"
            }`}
          >
            <Link href={"/"} className="">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                height={48.3}
                width={22.2}
              />
            </Link>
          </li>
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`navLink ${
                path.substring(1) === link.text ? "navActive" : "navDefault"
              }`}
            >
              <Link
                href={link.route}
                className="text-black font-normal text-[18px] leading-[28px] text-center font-montserrat"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button onClick={handleLogout}

          className="text-black font-bold text-center leading-[28px] text-[18px] font-montserrat"
        >
          Выйти
        </Button>
      </div>
    </header>
  );
};

export default HeaderBox;
