"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const NavBarOptions = ["Home", "About", "Projects", "Contact"];
  const [previousScrollPosition, setPreviousScrollPosition] = useState(
    typeof window !== "undefined"
      ? window.scrollY !== 0
        ? 0
        : window.scrollY
      : 0
  );
  const [visible, setVisible] = useState(true);

  const handleOpenNav = () => {
    if (!isOpen) {
      document.body.classList.add("hide");
    } else {
      document.body.classList.remove("hide");
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollPosition = window.scrollY;
        const isVisible = previousScrollPosition > currentScrollPosition;

        setPreviousScrollPosition(currentScrollPosition);
        setVisible(isVisible);
      }
    };

    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [previousScrollPosition, isOpen]);

  return (
    <>
      {visible && (
        <>
          <header
            className={
              isOpen
                ? ` transition-all flex items-center justify-between p-6 ${
                    previousScrollPosition == 0
                      ? "py-6 sm:py-3 lg:py-5 xl:py-5"
                      : "py-3 sm:py-1 lg:py-3 xl:py-2"
                  } fixed w-full z-20 top-0 bg-transparent lg:w-auto  lg:bg-transparent lg:px-10`
                : ` transition-all flex items-center justify-between p-6 ${
                    previousScrollPosition == 0
                      ? "py-6 lg:bg-transparent sm:py-4 lg:py-5 xl:py-5"
                      : "py-3 lg:bg-transparent sm:py-1 lg:py-2 xl:py-2 "
                  } fixed w-full z-20 top-0 bg-ColorAzulMarinoOpaco lg:w-auto lg:px-10 `
            }
          >
            <Image
              src={
                "https://raw.githubusercontent.com/dalowa/david-urbano/cb99741e256698f6151e2ba880a8aa50723d6eeb/public/new-d.svg"
              }
              alt="Logo"
              width={0o0}
              height={0o0}
              className="h-auto w-14 sm:w-14 lg:w-12 lg:h-auto xl:w-14"
            />

            <div
              className="flex flex-col gap-0 lg:hidden items-end justify-between w-10 h-6"
              onClick={handleOpenNav}
            >
              <div
                className={
                  isOpen
                    ? `h-0.5 w-10/12 bg-ColorCeleste origin-top-left rotate-45 transition-transform`
                    : `h-0.5 w-full bg-ColorCeleste transition-transform`
                }
              ></div>
              <div
                className={
                  isOpen
                    ? `h-1 w-6 bg-ColorB transition-transform`
                    : `h-0.5 w-10/12 bg-ColorCeleste transition-transform`
                }
              ></div>
              <div
                className={
                  isOpen
                    ? `h-0.5 w-10/12 bg-ColorCeleste origin-bottom-left rotate-n45 transition-transform `
                    : `h-0.5 w-7/12 bg-ColorCeleste transition-transform`
                }
              ></div>
            </div>
          </header>
          <aside
            className={
              isOpen
                ? `fixed flex w-screen h-screen z-10 `
                : `hidden lg:flex z-10`
            }
          >
            <div
              className="w-4/12 sm:w-4/12 md:w-6/12 bg-ColorAzulMarinoOpaco opacity-60 lg:hidden"
              onClick={handleOpenNav}
            ></div>
            <nav
              className={`transition-all w-8/12 sm:w-8/12 md:w-6/12  bg-ColorAzulMarinoClaro  flex justify-center items-center ${
                previousScrollPosition == 0
                  ? "lg:w-full lg:py-6 xl:py-8 "
                  : "lg:w-full lg:py-3 xl:py-4 shadow-lg shadow-ColorAzulMarino"
              } lg:px-10 lg:fixed lg:bg-ColorAzulMarinoOpaco   lg:z-10`}
            >
              <ul className="font-PrimaryFont text-ColorE flex flex-col gap-5 lg:items-center text-navBarMobile lg:flex-row lg:justify-end lg:w-full lg:text-navBarDesktop lg:text-ColorB lg:px-5 md:gap-2 lg:gap-3 xl:gap-5">
                {NavBarOptions.map((e, i) => (
                  <li
                    key={i}
                    className="transition px-2 py-3 text-ColorGrisClaro hover:text-ColorCeleste font-fontRobotoMono flex justify-center flex-col lg:flex-row items-center gap-1 rounded-xl lg:py-1 cursor-pointer md:p-5 lg:px-2"
                  >
                    <a href={`#${e}`} className="" onClick={handleOpenNav}>
                      <span className="text-ColorCeleste text-sm mr-1">{`0${
                        i + 1
                      }.`}</span>
                      {e}
                    </a>
                  </li>
                ))}
                <li className="hover:shadow-md hover:shadow-ColorCeleste bg-ColorAzulMarino text-ColorCeleste bg-ColorE cursor-pointer transition px-10 py-3 lg:py-2  lg:px-6 border border-ColorCeleste rounded-lg hover:bg-ColorCeleste hover:text-ColorAzulMarino">
                  <a
                    className=""
                    href="https://raw.githubusercontent.com/dalowa/david-urbano/main/public/Documents/David-Urbano-CV.pdf"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
