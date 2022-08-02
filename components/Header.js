import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoDark from "../public/assets/logo-dark.png";
import LogoLight from "../public/assets/logo-light.png";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "@react-hook/media-query";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);
  //   if (!mounted) return null;

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div
          className="p-4 rounded dark:bg-zinc-600 hover:dark:bg-zinc-500  cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <BsFillSunFill className="h-6 w-6" />
        </div>
      );
    } else {
      return (
        <div
          className="p-4 rounded bg-zinc-200 hover:bg-zinc-300 border border-zinc-300  cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonStarsFill className="h-5 w-5" />
        </div>
      );
    }
  };

  const renderLogoChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <Image src={LogoDark} layout="fill" objectFit="contain" />;
    } else {
      return <Image src={LogoLight} layout="fill" objectFit="contain" />;
    }
  };

  const [scrolled, setScrolled] = useState(false);

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

  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log(isNavOpen);
  return (
    <header
      className={`${
        scrolled
          ? "bg-zinc-200 dark:bg-zinc-700 transition ease-in shadow-md"
          : null
      }  fixed w-full  flex justify-between px-8 py-4 items-center z-50`}
    >
      <div className="relative w-40 h-20">{renderLogoChanger()}</div>
      <div className="flex space-x-8">
        <nav>
          <div className="hidden lg:inline-flex space-x-8 items-center">
            <Link href="#hero">
              <a className="hover:text-orange-400">
                <span className="">Home </span>
              </a>
            </Link>
            <Link href="#programs">
              <a className="hover:text-orange-400">
                <span className="">Programs </span>
              </a>
            </Link>
            <Link href="#reasons">
              <a className="hover:text-orange-400">
                <span className="">Why Us? </span>
              </a>
            </Link>
            <Link href="#plans">
              <a className="hover:text-orange-400">
                <span className="">Plans </span>
              </a>
            </Link>
            <Link href="#testimonials">
              <a className="hover:text-orange-400">
                <span className="">Testimonials </span>
              </a>
            </Link>
            <Link href="#join-us">
              <a className="p-4 shadow-md bg-orange-500 rounded-md text-white dark:hover:bg-white dark:hover:text-black  hover:bg-black">
                Join Now
              </a>
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
                <Link href="#hero">
                  <a className="hover:text-orange-400 py-4 px-4">
                    <span className="">Home </span>
                  </a>
                </Link>
                <Link href="#programs">
                  <a className="hover:text-orange-400  py-4 px-4">
                    <span className="">Programs </span>
                  </a>
                </Link>
                <Link href="#reasons">
                  <a className="hover:text-orange-400  py-4 px-4">
                    <span className="">Why Us? </span>
                  </a>
                </Link>
                <Link href="#plans">
                  <a className="hover:text-orange-400  py-4 px-4">
                    <span className="">Plans </span>
                  </a>
                </Link>
                <Link href="#testimonials">
                  <a className="hover:text-orange-400  py-4 px-4">
                    <span className="">Testimonials </span>
                  </a>
                </Link>
                <Link href="#join-us">
                  <a className="hover:text-orange-400  py-4 px-4">Join Now</a>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {renderThemeChanger()}
      </div>
    </header>
  );
}

export default Header;
