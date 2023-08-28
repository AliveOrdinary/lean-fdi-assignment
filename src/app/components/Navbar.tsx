import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="sticky w-full flex justify-between items-center top-0 left-0 bg-white px-10 py-4 shadow-md z-50">
      <Link href={"/"}>
        <Image src="/assets/Logo.svg" alt="Logo" width={100} height={100} />
      </Link>
      <div className="flex justify-center items-center gap-20">
        <div className="text-xl font-semibold">Filters</div>
        <div className="text-xl font-semibold">About Us</div>
        <div className="text-xl font-semibold">Blog</div>
        <div className="text-xl font-semibold border-2 border-primary rounded-xl px-4 py-1">
          Earning calculator
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="px-8 py-2 border-2 border-black rounded-3xl text-lg text-black">
          Login
        </div>
        <Link
          href="/sign-up"
          className="px-8 py-2 rounded-3xl text-lg bg-primary text-white"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};
