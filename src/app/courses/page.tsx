import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";
import { MusicItem } from "@/data/Types";
import { musicData } from "@/data/music_courses";

const page = () => {
  return (
    <div className="  overflow-hidden bg-gray-900 -z-20">
      <div className="mt-60">
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {musicData.map((elem: MusicItem) => {
            return (
              <div key={elem.id} className=" z-0 ">
                <PinContainer title={elem.title}>
                  <div className="  flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {elem.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        {elem.description}
                      </span>
                    </div>
                    <img
                      src={elem.image}
                      alt={elem.title}
                      className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
                    />
                  </div>
                </PinContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
