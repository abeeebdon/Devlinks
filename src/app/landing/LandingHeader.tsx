"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const LandingHeader = () => {
  const navigation = ["about", "features", "testimonials"];
  const [showSidebar, setShowSideBar] = useState<boolean>(false);
  return (
    <header className="p-4 md:px-6 w-full flex items-center justify-between h-[80px] max-w-[1400px]">
      <div className="flex items-center gap-2">
        <Image src="/images/logo2.svg" width={32} height={32} alt="Logo" />

        <h2 className="text-xl text-white">devlinks</h2>
      </div>
      <div className="flex flex-row-reverse md:flex-row items-center text-white gap-4 lg:gap-6">
        <nav className="hidden md:flex gap-6">
          {navigation.map((nav, i) => {
            return (
              <a
                href={`#${nav}`}
                key={i}
                className="capitalize hover:text-indigo-600"
              >
                {nav}
              </a>
            );
          })}
        </nav>
        <div className="md:hidden">
          <FaBars size={30} onClick={() => setShowSideBar(!showSidebar)} />
        </div>
        {showSidebar && (
          <div className=" absolute bg-gray top-0 p-4  bottom-0 min-h-screen right-0 w-[60%] max-w-[228px] ">
            <div className="flex justify-end">
              <FaTimes size={30} onClick={() => setShowSideBar(false)} />
            </div>
            <div className="flex-col flex gap-8 text-lg mt-[5vh]">
              {navigation.map((nav, i) => {
                return (
                  <a
                    href={`#${nav}`}
                    key={i}
                    className="capitalize hover:text-indigo-600"
                  >
                    {nav}
                  </a>
                );
              })}
              <Link href="/signup">Get Started</Link>
            </div>
          </div>
        )}

        <Link
          href="/signup"
          className="border border-white p-2  hidden sm:block md:p-3 text-sm text-white rounded-md  hover:text-lpurple"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default LandingHeader;
