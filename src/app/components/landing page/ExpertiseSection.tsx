import Image from "next/image";
import React from "react";

export const ExpertiseSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-expertbg w-full py-24">
      <div className="flex flex-col justify-center items-center gap-14">
        <div className="text-bold text-5xl ">Find the expertises from </div>
        <div className="flex justify-center items-center gap-28 ">
          <Image
            src="/assets/amazon.png"
            alt="amazon"
            width={300}
            height={100}
          />
          <Image
            src="/assets/spotify.png"
            alt="spotify"
            width={350}
            height={100}
          />
          <Image src="/assets/meta.png" alt="meta" width={350} height={100} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-14 pt-14">
        <div className="text-bold text-5xl">Make your career growth in</div>
        <div className="flex justify-center items-center overflow-x-auto no-scrollbar w-4/6 ">
          <div className="flex gap-10 w-full">
            <div className="min-w-[260px] h-36 bg-uiux flex justify-center items-center">
              <div className="text-2xl text-white stroke-2 stroke-black s">
                UI/UX Design
              </div>
            </div>
            <div className="min-w-[260px] h-36 bg-product flex justify-center items-center">
              <div className="text-2xl text-white stroke-2 stroke-black">
                Product Management
              </div>
            </div>
            <div className="min-w-[260px] h-36 bg-marketing flex justify-center items-center">
              <div className="text-2xl text-white stroke-2 stroke-black s">
                Marketing
              </div>
            </div>
            <div className="min-w-[260px] h-36 bg-data flex justify-center items-center">
              <div className="text-2xl text-white stroke-2 stroke-black s">
                Data Science
              </div>
            </div>
            <div className="min-w-[260px] h-36 bg-teach flex justify-center items-center">
              <div className="text-2xl text-white stroke-2 stroke-black s">
                Teaching
              </div>
            </div>
            <div className="min-w-[260px] h-36 bg-content flex justify-center items-center">
              <div className="text-2xl text-white stroke-2 stroke-black s">
                Content Writing
              </div>
            </div>
            <div className="min-w-[260px] h-36 bg-frontend flex justify-center items-center">
              <div className="text-2xl text-white stroke-2 stroke-black s">
                Front end
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
