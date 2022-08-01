import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { testimonialsData } from "../data/testimonialsData";

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
  return (
    <section
      id="testimonials"
      className="section grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 justify-center items-center "
    >
      <div className="col-span-1 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {renderStrokeChanger()}
            <p className="text-start"> {testimonialsData[selected].review}</p>
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
        <div className="relative mt-10 space-y-2 uppercase dark:text-white text-lg text-start">
          <div className="absolute w-60 h-80 border border-2 border-orange-400 bg-transparent top-[-10rem] right-[13rem]"></div>
          <div className="absolute w-60 h-72  bg-transparent top-[-4rem] right-[7rem] planCard"></div>
          <div className="absolute h-80 w-72 right-[8rem] top-[-8rem] bg-red-100 flex items-center justify-center ">
            <Image
              src={testimonialsData[selected].image}
              alt="reviews"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
