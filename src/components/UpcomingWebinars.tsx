"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

interface projectsData {
  title: string;
  description: string;
  link: string;
}

export const projects: projectsData[] = [
  {
    title: "Spotify",
    description:
      "A digital music service that gives you access to millions of songs and podcasts.",
    link: "https://spotify.com",
  },
  {
    title: "Apple Music",
    description:
      "A music and video streaming service developed by Apple Inc. offering over 70 million songs.",
    link: "https://music.apple.com",
  },
  {
    title: "SoundCloud",
    description:
      "An online audio distribution platform and music sharing website that enables its users to upload, promote, and share audio.",
    link: "https://soundcloud.com",
  },
  {
    title: "Bandcamp",
    description:
      "An online record store and music community where passionate fans connect with and directly support the artists they love.",
    link: "https://bandcamp.com",
  },
  {
    title: "Pandora",
    description:
      "A music streaming and internet radio service that provides personalized listening experiences.",
    link: "https://pandora.com",
  },
  {
    title: "Tidal",
    description:
      "A global music streaming platform bringing fans closer to artists through unique experiences and the highest sound quality.",
    link: "https://tidal.com",
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6"></div>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          featured
        </h2>
        <p className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </p>
      </div>
      <div className="mt-10">
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
          {/* <HoverEffect
            items={projects.map((webinar) => {
              return {
                title: webinar.title,
                description: webinar.description,
                link: webinar.link,
              };
            })}
          /> */}
        </div>
      </div>
      <div className=" mt-10 text-center"></div>
    </div>
  );
};

export default UpcomingWebinars;
