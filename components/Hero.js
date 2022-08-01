import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import heroImg from "../public/assets/hero_image.png";
import heroBackImg from "../public/assets/hero_image_back.png";
import heartImg from "../public/assets/heart.png";
import caloriesImg from "../public/assets/calories.png";
import Image from "next/image";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
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
            <span className="stroke-text stroke-text-dark">Shape</span>{" "}
            your&nbsp;
          </span>
          <span>ideal body</span>
        </h1>
      );
    } else {
      return (
        <h1 className="flex flex-col text-7xl font-bold mt-10 uppercase flex-wrap text-start">
          <span>
            <span className="stroke-text stroke-text-light">Shape</span>{" "}
            your&nbsp;
          </span>
          <span>ideal body</span>
        </h1>
      );
    }
  };
  const transition = { type: "spring", duration: 3 };
  return (
    <section id="hero" className="relative ">
      <div className="blur-spot hero-blur blur-[150px] "></div>
      <div className="min-h-screen  grid grid-cols-1 lg:grid-cols-8 gap-8 mb-20">
        <div className="lg:col-span-6 px-10 z-30 flex flex-col justify-center">
          <div className=" relative flex mt-10 lg:mt-0 md:w-[50vw] lg:w-[30vw] items-center justify-center bg-orange-100 dark:bg-zinc-800 rounded-full px-3 py-5 uppercase">
            <motion.div
              initial={{ left: "360px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
              className="absolute bg-orange-400  w-[12vw] md:w-[6vw] h-[80%] left-2 rounded-full z-10"
            ></motion.div>
            <span className="z-20">the best fitness club in the town</span>
          </div>
          <div className="flex flex-col gap-6">
            {renderStrokeChanger()}
            <p className="flex text-xl normal-case font-light tracking-wide text-start">
              In here we will help you to shape your ideal body and live up your
              life to the fullest
            </p>
          </div>
          <div className="flex flex-wrap mt-8 text-center space-x-8">
            <div className="">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">
                <NumberCounter end={140} start={100} delay="4" preFix="+" />
              </h2>
              <p className="leading-relaxed uppercase">Expert Coaches</p>
            </div>
            <div className="">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">
                <NumberCounter end={978} start={800} delay="4" preFix="+" />
              </h2>
              <p className="leading-relaxed uppercase">Members Joined</p>
            </div>
            <div className="">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">
                <NumberCounter end={50} start={0} delay="4" preFix="+" />
              </h2>
              <p className="leading-relaxed uppercase">Fitness Programs</p>
            </div>
          </div>
          <div className="flex gap-4 mt-10">
            <button className="text-md w-32 bg-orange-400 dark:text-white rounded-md  p-2 shadow-lg transition-all ease-in duration-300 hover:cursor-pointer">
              Get Started
            </button>
            <button className="text-md w-32 bg-transparent dark:text-white border border-orange-400 rounded-md  p-2 shadow-lg transition-all ease-in duration-300 hover:cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:col-span-2 relative  lg:bg-orange-400">
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="flex flex-col gap-4 bg-orange-300 dark:bg-zinc-500  lg:dark:bg-zinc-700 w-fit p-4 items-start rounded-lg absolute right-12 -top-10 lg:right-16 lg:top-28"
          >
            <div className="relative w-10 h-10">
              <Image
                src={heartImg}
                alt="heart"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h6 className="text-lg leading-4 dark:text-zinc-300 lg:dark:text-zinc-400 font-light">
              Heart Rate
            </h6>
            <h5 className="text-2xl leading-4 dark:text-white">116 bpm</h5>
          </motion.div>
          <div className="relative lg:absolute lg:w-96 lg:right-32 lg:top-40  z-30">
            <div className="relative h-[60vh] lg:h-[80vh]">
              <Image
                src={heroImg}
                alt="hero"
                layout="fill"
                objectFit="contain"
              />
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
                layout="fill"
                objectFit="contain"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
            className="flex gap-4 bg-orange-200 dark:bg-zinc-500 w-fit p-4 rounded-lg absolute right-[50%] top-[98%] lg:right-96 lg:top-3/4 items-center z-20"
          >
            <div className="relative w-10 h-10">
              <Image
                src={caloriesImg}
                alt="heart"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <h6 className="text-lg leading-7 dark:text-zinc-300 font-light">
                Calories Burned
              </h6>
              <h5 className="text-2xl leading-7 dark:text-white">220 kcal</h5>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
