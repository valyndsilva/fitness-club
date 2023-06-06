"use client";
import React from "react";
import heroImg from "app/assets/images/main-banner.png";
import Image from "next/image";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import Link from "next/link";
function Hero() {
  const transition = { type: "spring", duration: 3 };
  return (
    <section id="hero" className="relative ">
      <div className="blur-spot1 hero-blur1 blur-[150px]"></div>
      <div className="w-full max-w-7xl mx-auto">
        <div className="min-h-screen overflow-hidden flex flex-col lg:grid grid-cols-1 lg:grid-cols-8 gap-8 mb-20">
          <div className="pt-24 md:col-span-6 px-10 z-30 flex flex-col justify-center">
            <div className="hidden lg:inline-flex relative mt-10 lg:mt-0 md:w-[50vw] lg:w-[30vw] items-center justify-center bg-orange-100 dark:bg-zinc-800 rounded-full px-3 py-5 uppercase">
              <motion.div
                initial={{ left: "360px" }}
                whileInView={{ left: "8px" }}
                transition={{ ...transition, type: "tween" }}
                className="absolute bg-orange-400  w-[12vw] md:w-[6vw] h-[80%] left-2 rounded-full z-10"
              ></motion.div>
              <span className="z-20">the best fitness club in the town</span>
            </div>
            <div className="flex flex-col gap-6 w-full items-center lg:items-start">
              <h1 className="flex flex-col text-4xl lg:text-7xl font-bold mt-10 uppercase flex-wrap lg:text-start">
                <span>
                  <span className="stroke-text stroke-text-light dark:stroke-text-dark">
                    Shape
                  </span>{" "}
                  your&nbsp;
                </span>
                <span>ideal body</span>
              </h1>
              <p className="flex text-xl normal-case font-light tracking-wide text-center lg:text-start w-[80%]">
                Achieve your fitness goals with our comprehensive exercise
                library and personalized workout plans. Join us today and start
                your fitness journey.
              </p>
            </div>
            <div className="grid grid-cols-12 w-full lg:w-[42vw] mt-8 items-center lg:items-start space-x-8">
              <div className="col-span-4">
                <h2 className="title-font font-medium text-3xl">
                  <NumberCounter end={500} start={100} delay="1" preFix="+" />
                </h2>
                <p className="leading-relaxed uppercase">Targeted Exercises</p>
              </div>
              <div className="col-span-4">
                <h2 className="title-font font-medium text-3xl">
                  <NumberCounter end={978} start={800} delay="4" preFix="+" />
                </h2>
                <p className="leading-relaxed uppercase">Members Joined</p>
              </div>
              <div className="col-span-4">
                <h2 className="title-font font-medium text-3xl">
                  <NumberCounter end={50} start={35} delay="4" preFix="+" />
                </h2>
                <p className="uppercase">Fitness Programs</p>
              </div>
            </div>
            <div className="flex gap-4 mt-10 w-full text-center justify-center lg:justify-start">
              <Link href="#plans">
                <button className="text-md w-32 p-5 bg-orange-400 hover:bg-orange-500 dark:text-white rounded-md shadow-lg transition-all ease-in duration-300 hover:cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 justify-center  w-full md:relative">
            <div className="relative  lg:absolute lg:w-96 lg:right-12 lg:top-32  z-30">
              <div className="relative h-[80vh]">
                <Image
                  src={heroImg}
                  alt="hero"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
