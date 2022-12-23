import React,{FC} from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
interface Props{
  pageInfo: PageInfo
}
const Hero :FC<Props>= ({pageInfo}) => {
  const [text, count] = useTypewriter({
    words: [
      `我是${pageInfo.name}，歡迎來到我的網站`,
      "網頁全端工程師", 
      "MERN棧工程師",],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="flex flex-col space-y-8 items-center relative bottom-96">
        <img className="relative rounded-full h-52 w-52 mx-auto obkect-cover"
        src={urlFor(pageInfo.heroImage).url()}
        alt=""/>
        <div>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            {pageInfo.role}
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
            <Link href="#contact">
              <button className="heroButton">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
