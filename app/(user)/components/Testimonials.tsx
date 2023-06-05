"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { testimonialsData } from "@/data/testimonialsData";
import { motion } from "framer-motion";

function Testimonials() {
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
        <div className="space-y-2">
          <span className="flex flex-col text-lg font-semibold uppercase text-orange-400 text-start">
            testimonials
          </span>
          <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap text-start">
            <span>
              <span className="stroke-text stroke-text-dark">What they </span>
              say about us?&nbsp;
            </span>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="space-y-2">
          <span className="flex flex-col text-lg font-semibold uppercase text-orange-400 text-start">
            testimonials
          </span>
          <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap text-start">
            <span>
              <span className="stroke-text stroke-text-light">What they </span>
              say about us?&nbsp;
            </span>
          </h1>
        </div>
      );
    }
  };
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };
  return (
    <section
      id="testimonials"
      className="section  min-h-screen  grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center w-[80vw] mx-auto"
    >
      <div className="col-span-1 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {renderStrokeChanger()}
            <motion.p
              key={selected}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={transition}
              className="text-start"
            >
              {" "}
              {testimonialsData[selected].review}
            </motion.p>
            <span className="text-start">
              <span className="text-orange-400">
                {testimonialsData[selected].name} &nbsp;
              </span>
              -&nbsp; {testimonialsData[selected].jobTitle}
            </span>
            <div className="flex gap-4">
              <BiLeftArrowAlt
                className="w-10 h-10 dark:text-white hover:cursor-pointer"
                onClick={() =>
                  selected === 0
                    ? setSelected(testimonialsLength - 1)
                    : setSelected((prev) => prev - 1)
                }
              />
              <BiRightArrowAlt
                className="w-10 h-10 dark:text-white hover:cursor-pointer"
                onClick={() =>
                  selected === testimonialsLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 ">
        <div className="relative mt-40 lg:mt-10 space-y-2 uppercase dark:text-white text-lg text-start items-center justify-center flex">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
            className="absolute w-60 h-80 border-2 border-orange-400 bg-transparent top-[-10rem] right-[12%] md:right-[42%] lg:right-[13rem]"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, duration: 2 }}
            className="absolute w-60 h-72  bg-transparent top-[-4rem] right-[31%]  md:top-[-3rem] md:right-[15rem] lg:right-[7rem] planCard"
          ></motion.div>
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            className="relative items-center justify-center h-80 w-72  lg:absolute lg:right-[8rem] top-[-8rem] flex"
          >
            <Image
              src={testimonialsData[selected].image}
              alt="reviews"
              fill={true}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
