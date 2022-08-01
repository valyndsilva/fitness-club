import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoDark from "../public/assets/logo-dark.png";
import LogoLight from "../public/assets/logo-light.png";
import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsCardChecklist,
  BsListOl,
  BsQuestionSquareFill,
} from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

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
        <BsFillSunFill
          className="h-6 w-6 cursor-pointer hover:text-orange-400"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="h-5 w-5 cursor-pointer hover:text-orange-400"
          onClick={() => setTheme("dark")}
        />
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

  return (
    <header className="flex justify-between px-8 py-4 items-center shadow-md">
      <div className="relative w-40 h-20">{renderLogoChanger()}</div>
      <nav className="flex gap-8 items-center">
        <Link href="#hero">
          <a className="hover:text-orange-400">
            <span className="hidden lg:inline-flex">Home </span>
            <FaHome className="w-5 h-5 lg:hidden" />
          </a>
        </Link>
        <Link href="#programs">
          <a className="hover:text-orange-400">
            <span className="hidden lg:inline-flex">Programs </span>
            <BsListOl className="w-5 h-5 lg:hidden" />
          </a>
        </Link>
        <Link href="#reasons">
          <a className="hover:text-orange-400">
            <span className="hidden lg:inline-flex">Why Us? </span>
            <BsQuestionSquareFill className="w-5 h-5 lg:hidden" />
          </a>
        </Link>
        <Link href="#plans">
          <a className="hover:text-orange-400">
            <span className="hidden lg:inline-flex">Plans </span>
            <BsCardChecklist className="w-5 h-5 lg:hidden" />
          </a>
        </Link>
        <Link href="#testimonials">
          <a className="hover:text-orange-400">
            <span className="hidden lg:inline-flex">Testimonials </span>
            <MdReviews className="w-5 h-5 lg:hidden" />
          </a>
        </Link>
        <Link href="#joinUs">
          <a className="hidden md:inline-flex p-4 bg-orange-400 text-white dark:hover:bg-white dark:hover:text-black  hover:bg-black">
            Join Now
          </a>
        </Link>
        {renderThemeChanger()}
      </nav>
    </header>
  );
}

export default Header;
