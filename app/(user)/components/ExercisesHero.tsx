"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import heroImg from "app/assets/about-banner.png";
import heroBackImg from "app/assets/hero_image_back.png";
import heartImg from "app/assets/heart.png";
import caloriesImg from "app/assets/calories.png";
import Image from "next/image";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Link from "next/link";
function Hero() {
  const { systemTheme, theme } = useTheme();

  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderStrokeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <h1 className="flex flex-col text-7xl font-bold mt-10 uppercase flex-wrap text-start">
          <span>
            <span className="stroke-text stroke-text-dark">Sweat,</span>{" "}
            Smile&nbsp;
          </span>
          <span>And Repeat</span>
        </h1>
      );
    } else {
      return (
        <h1 className="flex flex-col text-7xl font-bold mt-10 uppercase flex-wrap text-start">
          <span>
            <span className="stroke-text stroke-text-light">Sweat,</span>{" "}
            Smile&nbsp;
          </span>
          <span>And Repeat</span>
        </h1>
      );
    }
  };
  const transition = { type: "spring", duration: 3 };
  return (
    <section id="hero" className="relative ">
      <div className="blur-spot2 hero-blur2 blur-[150px] "></div>
      <div className="min-h-screen  grid grid-cols-1 md:grid-cols-8 gap-8 mb-20">
        <div className="pt-24 md:col-span-6 px-10 z-30 flex flex-col justify-center">
          <div className="flex flex-col gap-4">
            {renderStrokeChanger()}
            <p className="flex text-xl normal-case font-light tracking-wide text-start">
              In here we will help you to shape your ideal body and live up your
              life to the fullest
            </p>
          </div>

          <div className="flex gap-4 mt-10">
            <Link href="/exercises#search-exercises">
              <button className="text-lg bg-darkTurmeric hover:bg-orange-500 dark:text-white rounded-md  p-5 shadow-lg transition-all ease-in duration-300 hover:cursor-pointer">
                Explore Exercises
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 relative  lg:bg-darkTurmeric">
    
          <div className="relative lg:absolute lg:w-[600px] lg:right-5 lg:top-40 z-30">
            <div className="relative h-[90vh]">
              <Image src={heroImg} alt="hero" fill className="object-contain" />
            </div>
          </div>
          <motion.div
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            className="absolute w-64 right-[45%] top-16 lg:right-80 lg:top-16 z-10"
          >
            <div className="relative h-[60vh]">
              <Image
                src={heroBackImg}
                alt="hero animation"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
