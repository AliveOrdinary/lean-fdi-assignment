import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <div className="flex justify-center items-center py-28">
      <div className="flex flex-col justify-center items-center pl-24 gap-12">
        <div>
          <Image
            src="/assets/bluerocket.png"
            alt="rocket"
            width={80}
            height={120}
          />
        </div>
        <div className="text-7xl font-semibold">Grow Faster Together</div>
        <div className="text-6xl font-semibold text-center">
          Find a mentor or Lead the path for someone. it&#39;s a win-win!
        </div>
        <div className="flex justify-center items-center gap-32">
          <div className="px-16 py-6 text-lg font-bold text-white bg-primary rounded-3xl drop-shadow-btnshadow">
            Find a Mentor
          </div>
          <div className="px-16 py-6 text-lg font-bold text-white bg-primary rounded-3xl  drop-shadow-btnshadow cursor-pointer">
            <Link href="/sign-up">Become a Mentor</Link>
          </div>
        </div>
      </div>
      <div className="self-start">
        <Image
          src="/assets/hero_illustration.png"
          alt="rocket"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};
