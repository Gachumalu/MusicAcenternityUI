"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";
import MovingCard from "./MovingCard";

const BoxesBg = () => {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className=" z-30  my-20 md:mt-0 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600">
        Music Testimonials
      </h1>
      <MovingCard />
    </div>
  );
};

export default BoxesBg;
