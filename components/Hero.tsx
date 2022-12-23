import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Full Stack developer", "MERN developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <div className="flex flex-col space-y-8 items-center relative bottom-96">
        <Image src="/me.jpg" alt="" width={200} height={200} className="rounded-full"/>
        <div>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Software Engineer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="">
              <button className="heroButton">About</button>
            </Link>
            <Link href="">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
