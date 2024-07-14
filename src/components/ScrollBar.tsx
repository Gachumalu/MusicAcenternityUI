"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Bohemian Rhapsody - Queen",
    description:
      "Bohemian Rhapsody is a song by the British rock band Queen. Written by Freddie Mercury for the band's 1975 album A Night at the Opera, the song is a six-minute suite, consisting of several sections without a chorus: an intro, a ballad segment, an operatic passage, a hard rock part, and a reflective coda. It is one of Queen's most popular and critically acclaimed songs, known for its complex structure and innovative production.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png"
          alt="Bohemian Rhapsody - Queen"
        />
      </div>
    ),
  },
  {
    title: "Stairway to Heaven - Led Zeppelin",
    description:
      "Stairway to Heaven is a song by the English rock band Led Zeppelin, released in late 1971. It was composed by the band's guitarist Jimmy Page and lead singer Robert Plant for their untitled fourth studio album (often titled Led Zeppelin IV). The song is widely regarded as one of the greatest rock songs of all time, featuring an acoustic opening, a gradual build-up, and a powerful electric guitar solo.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/10/21/1413887767697/dfbb075e-d779-4997-8cc0-70aa0ad5d9af-2060x1236.jpeg?width=1900&dpr=1&s=none"
          alt="Stairway to Heaven - Led Zeppelin"
        />
      </div>
    ),
  },
  {
    title: "Imagine - John Lennon",
    description:
      "Imagine is a song by English rock musician John Lennon from his 1971 album of the same name. The song's lyrics encourage the listener to imagine a world at peace without the barriers of borders, religions, or nationalities, and is widely regarded as one of Lennon's best works. It has since been covered by numerous artists and remains a powerful anthem for peace and unity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://images-cdn.ubuy.co.in/634ec1b97a26661bfc2d7466-john-lennon-imagine-wall-art-print.jpg"
          alt="Imagine - John Lennon"
        />
      </div>
    ),
  },
  {
    title: "Like a Rolling Stone - Bob Dylan",
    description:
      "Like a Rolling Stone is a song by American singer Bob Dylan, released on July 20, 1965, by Columbia Records. Its confrontational lyrics transformed Dylan's image from a folk singer to a rock icon. The song is considered one of the greatest in the history of popular music, noted for its impact on both music and culture.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-13525-dylan-1800-1384958192.jpg?w=1581&h=1054&crop=1"
          alt="Like a Rolling Stone - Bob Dylan"
        />
      </div>
    ),
  },
  {
    title: "Smells Like Teen Spirit - Nirvana",
    description:
      "Smells Like Teen Spirit is a song by American rock band Nirvana, released as the lead single from the band's second studio album, Nevermind (1991), on September 10, 1991. Written by Kurt Cobain, it was Nirvana's biggest hit, often credited with bringing grunge music and alternative rock to a mainstream audience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://media.npr.org/assets/img/2012/02/24/kurtkobain_wide-29a154ab938bd1f323f76e9877b522ab7f269813.jpg?s=800&c=85&f=webp"
          alt="Smells Like Teen Spirit - Nirvana"
        />
      </div>
    ),
  },
];

const ScrollBar = () => {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
};

export default ScrollBar;
