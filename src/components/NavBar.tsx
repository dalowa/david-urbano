"use client";

import { Island_Moments } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={
          isOpen
            ? `flex items-center justify-between px-3 py-1 fixed w-full z-20 top-0 bg-transparent lg:h-20 lg:w-auto  lg:bg-transparent sm:py-3`
            : `flex items-center justify-between px-3 py-1 fixed w-full z-20 top-0 bg-ColorBOpacity50 lg:h-20 lg:w-auto  lg:bg-transparent sm:py-3`
        }
      >
        <Image
          src={
            "https://raw.githubusercontent.com/dalowa/david-urbano/8250a1e35a2a09bfd32eb9788b2f4a003114953a/public/favicon.svg"
          }
          alt="Logo"
          width={0o0}
          height={0o0}
          className="h-auto w-8 sm:w-14 lg:h-16 lg:w-16"
        />

        <div
          className="flex flex-col gap-1 lg:hidden items-center"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div
            className={
              isOpen
                ? `h-1 w-6 bg-ColorE origin-top-left rotate-45 transition-transform sm:h-2 sm:w-10`
                : `h-1 w-6 bg-ColorE transition-transform sm:h-2 sm:w-10 `
            }
          ></div>
          <div
            className={
              isOpen
                ? `h-1 w-6 bg-ColorB transition-transform sm:h-2 sm:w-10`
                : `h-1 w-6 bg-ColorE transition-transform sm:h-2 sm:w-10`
            }
          ></div>
          <div
            className={
              isOpen
                ? `h-1 w-6 bg-ColorE origin-bottom-left rotate-n45 transition-transform sm:h-2 sm:w-10`
                : `h-1 w-6 bg-ColorE transition-transform sm:h-2 sm:w-10`
            }
          ></div>
        </div>
      </div>
      <div
        className={
          isOpen ? `fixed flex w-screen h-screen z-10` : `hidden lg:flex`
        }
      >
        <div
          className="w-2/5 bg-ColorE opacity-60 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
        <nav className="w-3/5 bg-ColorB shadow-xl shadow-black flex justify-center items-center lg:w-full lg:h-20 lg:fixed lg:bg-WhiteOpacity50 lg:shadow-md lg:shadow-ColorB lg:z-10">
          <ul className="font-PrimaryFont text-ColorE flex flex-col gap-5 sm:text-2xl lg:items-center text-xl lg:flex-row lg:justify-end lg:w-full lg:text-ColorB lg:px-5 md:text-3xl lg:text-xl lg:gap-3 xl:gap-5">
            <li className="transition px-2 py-3 border-2 border-black flex justify-center rounded-xl lg:py-1 lg:border-0 cursor-pointer hover:border-b-8 lg:border-ColorB md:p-5 lg:px-2">
              <a href="#Home">Home</a>
            </li>
            <li className="transition px-2 py-3 border-2 border-black flex justify-center rounded-xl lg:py-1 lg:border-0 cursor-pointer hover:border-b-8 lg:border-ColorB md:p-5 lg:px-2">
              <a href="#AboutMe">AboutMe</a>
            </li>
            <li className="transition px-2 py-3 border-2 border-black flex justify-center rounded-xl lg:py-1 lg:border-0 cursor-pointer hover:border-b-8 lg:border-ColorB md:p-5  lg:px-2">
              <a href="#Education">Education</a>
            </li>
            <li className="transition px-2 py-3 border-2 border-black flex justify-center rounded-xl lg:py-1 lg:border-0 cursor-pointer hover:border-b-8 lg:border-ColorB md:p-5  lg:px-2">
              <a href="#Projects">Projects</a>
            </li>
            <li className="transition px-2 py-3 border-2 border-black flex justify-center rounded-xl lg:py-1 lg:border-0 cursor-pointer hover:border-b-8 lg:border-ColorB md:p-5  lg:px-2">
              <a href="#ContactMe">ContactMe</a>
            </li>
            <li className=" px-2 py-3 border-ColorA border-2 flex justify-center text-ColorA bg-ColorE cursor-pointer transition hover:text-ColorE hover:bg-ColorA md:p-5 lg:py-2  lg:px-2">
              <a>Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
