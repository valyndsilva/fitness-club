"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import LogoDark from "app/assets/logo-dark.png";
import LogoLight from "app/assets/logo-light.png";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isNavOpen, setIsNavOpen] = useState(false);
  // console.log(isNavOpen);

  // On scroll show fixed navigation
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderThemeChanger = () => {
    if (currentTheme === "dark") {
      return (
        <div
          className="p-4 rounded dark:bg-zinc-700 hover:dark:bg-zinc-500  cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <BsFillSunFill className="h-6 w-6" />
        </div>
      );
    } else {
      return (
        <div
          className="p-4 rounded bg-zinc-300 hover:bg-zinc-200 border border-zinc-300  cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonStarsFill className="h-5 w-5" />
        </div>
      );
    }
  };

  const renderLogoChanger = () => {
    if (currentTheme === "dark") {
      return (
        <Link href="/">
          <Image src={LogoDark} fill className="object-contain" alt="" />
        </Link>
      );
    } else {
      return (
        <Link href="/">
          <Image src={LogoLight} fill className="object-contain" alt="" />
        </Link>
      );
    }
  };

  return (
    <header
      className={`${
        scrolled && "bg-zinc-200 dark:bg-darkAsh transition ease-in shadow-md "
      }  fixed left-0 right-0 top-0 flex z-50`}
    >
      <div className="flex w-full max-w-7xl mx-auto justify-between px-8 py-4 items-center ">
        <div className="relative w-40 h-20">{renderLogoChanger()}</div>

        <div className="flex space-x-8">
          <nav>
            <div className="hidden lg:inline-flex space-x-8 items-center">
              <Link
                href="#hero"
                className="hover:font-bold dark:hover:font-medium dark:hover:text-orange-600"
              >
                <span className="">Home </span>
              </Link>
              <Link
                href="#reasons"
                className="hover:font-bold dark:hover:font-medium dark:hover:text-orange-600"
              >
                <span className="">Why Us? </span>
              </Link>
              <Link
                href="#plans"
                className="hover:font-bold dark:hover:font-medium dark:hover:text-orange-600"
              >
                <span className="">Plans </span>
              </Link>
              <Link
                href="#testimonials"
                className="hover:font-bold dark:hover:font-medium dark:hover:text-orange-600"
              >
                <span className="">Testimonials </span>
              </Link>
              <Link
                href="/exercises"
                className="p-4 shadow-md bg-orange-500 rounded-md text-white dark:hover:bg-white dark:hover:text-black  hover:bg-black"
              >
                Join Now
              </Link>
            </div>
            <div className="flex flex-col lg:hidden space-x-8 items-center z-50">
              {isNavOpen ? (
                <div
                  className="lg:hidden p-4 rounded dark:bg-zinc-600 hover:dark:bg-zinc-500  cursor-pointer"
                  onClick={() => setIsNavOpen(false)}
                >
                  <AiOutlineClose className="h-6 w-6 cursor-pointer" />
                </div>
              ) : (
                <div
                  className="lg:hidden p-4 rounded dark:bg-zinc-600 hover:dark:bg-zinc-500  cursor-pointer"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <GiHamburgerMenu className="h-6 w-6 cursor-pointer" />
                </div>
              )}
              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div className="fixed right-0 top-[6rem] bg-zinc-600 py-4 px-12 flex flex-col items-center justify-between min-h-[250px]">
                  <Link
                    href="#hero"
                    className="hover:text-orange-400 py-4 px-4"
                  >
                    <span className="">Home </span>
                  </Link>
                  <Link
                    href="#reasons"
                    className="hover:text-orange-400  py-4 px-4"
                  >
                    <span className="">Why Us? </span>
                  </Link>
                  <Link
                    href="#plans"
                    className="hover:text-orange-400  py-4 px-4"
                  >
                    <span className="">Plans </span>
                  </Link>
                  <Link
                    href="#testimonials"
                    className="hover:text-orange-400  py-4 px-4"
                  >
                    <span className="">Testimonials </span>
                  </Link>
                  <Link
                    href="/exercises"
                    className="hover:text-orange-400  py-4 px-4"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {renderThemeChanger()}
        </div>
      </div>
    </header>
  );
}

export default Header;
