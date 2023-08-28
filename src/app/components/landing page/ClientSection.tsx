import Image from "next/image";
import React from "react";

export const ClientSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-white py-16 gap-10">
      <div className="text-bold text-5xl">What our Clients says about us</div>
      <div className="flex justify-center items-center gap-10 pb-6">
        <div className="flex w-96 h-72 justify-center items-center bg-secondary rounded-full p-10 relative">
          <div className="text-center text-white font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            assumenda nostrum? Facere ipsam fugiat nisi voluptate alias incidunt
            sint, saepe sequi inventore. Natus illum recusandae, fuga laboriosam
            ipsum aut tempora.
          </div>
          <div className="absolute bottom-1 left-2 w-0 h-0 border-l-[50px] border-l-transparent border-b-[75px] border-b-secondary border-r-[50px] border-r-transparent"></div>
          <div className="text-white font-bold text-lg absolute bottom-2 right-36">
            Alisa
          </div>
          <div className="text-secondary font-bold text-lg absolute -bottom-8 right-36">
            Founder, XOXO
          </div>
          <Image
            src="/assets/client1.svg"
            alt="alisa"
            width={100}
            height={100}
            className="absolute -bottom-8 right-0"
          />
        </div>
        <div className="flex w-96 h-72 justify-center items-center bg-secondary rounded-full p-10 relative">
          <div className="text-center text-white font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            assumenda nostrum? Facere ipsam fugiat nisi voluptate alias incidunt
            sint, saepe sequi inventore. Natus illum recusandae, fuga laboriosam
            ipsum aut tempora.
          </div>
          <div className="absolute bottom-1 left-2 w-0 h-0 border-l-[50px] border-l-transparent border-b-[75px] border-b-secondary border-r-[50px] border-r-transparent"></div>
          <div className="text-white font-bold text-lg absolute bottom-2 right-36">
            Michael
          </div>
          <div className="text-secondary font-bold text-lg absolute -bottom-8 right-36">
            Manager, QWERTY
          </div>
          <Image
            src="/assets/client2.svg"
            alt="alisa"
            width={100}
            height={100}
            className="absolute -bottom-8 right-0"
          />
        </div>
        <div className="flex w-96 h-72 justify-center items-center bg-secondary rounded-full p-10 relative">
          <div className="text-center text-white font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            assumenda nostrum? Facere ipsam fugiat nisi voluptate alias incidunt
            sint, saepe sequi inventore. Natus illum recusandae, fuga laboriosam
            ipsum aut tempora.
          </div>
          <div className="absolute bottom-1 left-2 w-0 h-0 border-l-[50px] border-l-transparent border-b-[75px] border-b-secondary border-r-[50px] border-r-transparent"></div>
          <div className="text-white font-bold text-lg absolute bottom-2 right-36">
            Lee Cooper
          </div>
          <div className="text-secondary font-bold text-lg absolute -bottom-8 right-36">
            HR Director, META
          </div>
          <Image
            src="/assets/client3.svg"
            alt="alisa"
            width={100}
            height={100}
            className="absolute -bottom-8 right-0"
          />
        </div>
      </div>
    </div>
  );
};
