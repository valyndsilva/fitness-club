"use client";
import { useTheme } from "next-themes";
import React from "react";
import heroImg from "app/assets/images/gym-char-2.png";
import heartImg from "app/assets/heart.png";
import caloriesImg from "app/assets/calories.png";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  const renderStrokeChanger = () => {
    const { theme } = useTheme();
    console.log({ theme });
    if (theme === "dark") {
      return (
        <h1 className="flex flex-col text-4xl lg:text-7xl font-bold mt-10 uppercase flex-wrap text-start">
          <span>
            <span className="stroke-text stroke-text-dark">Sweat,</span>{" "}
            Smile&nbsp;
          </span>
          <span>And Repeat</span>
        </h1>
      );
    } else {
      return (
        <h1 className="flex flex-col text-4xl lg:text-7xl font-bold mt-10 uppercase flex-wrap text-start">
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
      <div className="blur-spot1 hero-blur1 blur-[150px] z-30"></div>
      <div className="blur-spot2 hero-blur2 blur-[150px] z-30"></div>
      <div className="max-w-7xl mx-auto">
        <div className="min-h-screen overflow-hidden flex flex-col lg:grid grid-cols-1 md:grid-cols-8 gap-8 mb-20">
          <div className="pt-24 lg:col-span-6 px-10 z-30 flex flex-col justify-center">
            <div className="flex flex-col gap-4">
              {renderStrokeChanger()}
              <p className="flex text-xl normal-case font-light tracking-wide text-start w-[80%]">
                In here we will help you to shape your ideal body and live up
                your life to the fullest
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <Link href="/exercises#search-exercises">
                <button className="text-lg bg-orange-500 hover:bg-orange-400 dark:text-white rounded-md  p-5 shadow-lg transition-all ease-in duration-300 hover:cursor-pointer">
                  Explore Exercises
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 relative ">
            <div className="relative md:right-2 md:top-32 lg:absolute lg:w-[600px] lg:right-2 lg:top-32">
              <div className="animate-move flex flex-col gap-4 bg-orange-200 dark:bg-darkAsh w-fit p-4 items-start rounded-lg absolute right-12 -top-10 lg:right-16 lg:top-28 z-30">
                <div className="relative w-10 h-10 z-30">
                  <Image
                    src={heartImg}
                    alt="heart"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain z-30"
                  />
                </div>
                <h6 className="text-lg leading-4 dark:text-zinc-300 lg:dark:text-zinc-400 font-light">
                  Heart Rate
                </h6>
                <h5 className="text-2xl leading-4 dark:text-white">116 bpm</h5>
              </div>
              <div className="relative h-[60vh] mt-10 lg:mt-0 lg:h-[90vh] z-20">
                <Image
                  src={heroImg}
                  alt="hero"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex gap-4 animate-move bg-orange-200 dark:bg-darkAsh shadow-md w-fit p-4 rounded-lg absolute right-[30%] top-[70%] lg:right-96 lg:top-2/4 items-center z-30">
                <div className="relative w-10 h-10">
                  <Image
                    src={caloriesImg}
                    alt="heart"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h6 className="text-lg leading-7 dark:text-zinc-300 font-light">
                    Calories Burned
                  </h6>
                  <h5 className="text-2xl leading-7 dark:text-white">
                    220 kcal
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
