"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import Image from "next/image";
import Data from "@/data/music_courses";

interface Datas {
  title: string;
  artist: string;
  album: string;
  release_year: number;
  genre: string;
  duration: string;
  id: number;
}

const Card = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {Data.songs.map((elem: Datas) => {
          return (
            <>
              <div
                key={elem.id}
                className=" size-45 w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
              >
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-zinc-900">
                  <h2>Title : {elem.title}</h2>
                  <p className=" text-sm"> Album : {elem.album}</p>
                  <h4>Artist : {elem.artist}</h4>
                  <h6>Duration : {elem.duration}</h6>
                </BackgroundGradient>
              </div>
              {/* <BackgroundGradient
                className="size-52 rounded-[22px] max-w-sm p-4 sm:p-10
               bg-white dark:bg-zinc-900 "
              >
                <h1>{elem.album}</h1>
              </BackgroundGradient> */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
