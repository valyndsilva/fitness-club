import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import LogoDark from "../public/assets/logo-dark.png";
import LogoLight from "../public/assets/logo-light.png";

function Footer() {
  const { systemTheme, theme, setTheme } = useTheme();

  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
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
    <footer className="flex w-full items-center justify-between text-center px-10 space-y-4 h-40 border-t relative">
      <div className="flex space-x-8">
        <BsInstagram className="h-8 w-8 dark:text-white" />
        <BsFacebook className="h-8 w-8 dark:text-white" />
        <BsLinkedin className="h-8 w-8 dark:text-white" />
      </div>
      <span className="mt-0">Designed by Valyn Silva.</span>
      <div className="relative w-36 h-16 flex items-center justify-center">
      {renderLogoChanger()}
      </div>
    </footer>
  );
}

export default Footer;
