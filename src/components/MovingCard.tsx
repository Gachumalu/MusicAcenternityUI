"use client";

// import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "Is this the real life? Is this just fantasy?",
    name: "Freddie Mercury",
    title: "Bohemian Rhapsody - Queen",
  },
  {
    quote:
      "There's a lady who's sure all that glitters is gold, and she's buying a stairway to heaven.",
    name: "Robert Plant",
    title: "Stairway to Heaven - Led Zeppelin",
  },
  {
    quote: "Imagine all the people living life in peace.",
    name: "John Lennon",
    title: "Imagine - John Lennon",
  },
  {
    quote:
      "How does it feel, to be on your own, with no direction home, like a complete unknown, like a rolling stone?",
    name: "Bob Dylan",
    title: "Like a Rolling Stone - Bob Dylan",
  },
  {
    quote:
      "With the lights out, it's less dangerous. Here we are now, entertain us.",
    name: "Kurt Cobain",
    title: "Smells Like Teen Spirit - Nirvana",
  },
];

const MovingCard = () => {
  return (
    <section>
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default MovingCard;
