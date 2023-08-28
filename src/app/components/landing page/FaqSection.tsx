import React from "react";

export const FaqSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-16 gap-10">
      <div className="text-5xl font-semibold">Lets Clear your Doubts!</div>
      <div className="w-3/6 flex flex-col justify-center items-center gap-2">
        <div className="bg-white flex justify-between items-center shadow-md w-full py-4 px-16">
          <div className="text-black font-semibold text-xl">
            What is the approval criteria to be a Mentor?
          </div>
          <div className="text-black font-semibold text-xl">+</div>
        </div>
        <div className="bg-white flex justify-between items-center shadow-md w-full py-4 px-16">
          <div className="text-black font-semibold text-xl">
            How does Mentor Bridge work for mentors?
          </div>
          <div className="text-black font-semibold text-xl">+</div>
        </div>
        <div className="bg-white flex justify-between items-center shadow-md w-full py-4 px-16">
          <div className="text-black font-semibold text-xl">
            Can i charge fees of my choice?
          </div>
          <div className="text-black font-semibold text-xl">+</div>
        </div>
        <div className="bg-white flex justify-between items-center shadow-md w-full py-4 px-16">
          <div className="text-black font-semibold text-xl">
            Can i get guidence on how to be a mentor?
          </div>
          <div className="text-black font-semibold text-xl">+</div>
        </div>
      </div>
    </div>
  );
};
