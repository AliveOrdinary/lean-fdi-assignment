import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-secondary w-full flex-col justify-center items-center py-4">
      <div className="flex justify-evenly items-center py-8">
        <div className="flex flex-row justify-center items-center gap-6">
          <Image
            src={"/assets/linkedin.svg"}
            alt="linkedin"
            width={32}
            height={32}
          />
          <Image
            src={"/assets/instagram.svg"}
            alt="instagram"
            width={32}
            height={32}
          />
          <Image
            src={"/assets/twitter.svg"}
            alt="twitter"
            width={32}
            height={32}
          />
          <Image
            src={"/assets/facebook.svg"}
            alt="facebook"
            width={32}
            height={32}
          />
        </div>
        <div className="flex justify-center items-center gap-24">
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="text-white text-base underline">Contact Us</div>
            <div className="text-white text-base underline">Privacy policy</div>
            <div className="text-white text-base underline">Terms of use</div>
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="text-white text-base ">Help center</div>
            <div className="text-white text-base ">About Us</div>
            <div className="text-white text-base ">FAQs</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-4/6 text-white text-base">
        © 2023 Mentorbridge. All Rights Reserved.
      </div>
    </footer>
  );
};
