import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="md:inline-flex w-full items-center justify-center md:justify-between text-center px-10 space-y-4 h-40 border-t relative">
      <div className="flex space-x-8 my-8 w-auto items-center justify-center">
        <BsInstagram className="h-8 w-8 dark:text-zinc-400" />
        <BsFacebook className="h-8 w-8 dark:text-zinc-400" />
        <BsLinkedin className="h-8 w-8 dark:text-zinc-400" />
      </div>
      <div>
        <span className="mt-0 dark:text-zinc-400">© 2022 Fitness Club. Designed by</span>
        <Link href="https://www.valynsilva.com">
          <span className="font-light text-orange-400 cursor-pointer"> Valyn Silva.</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
