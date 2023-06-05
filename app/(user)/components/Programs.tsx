"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { programsData } from "../../../data/programsData";
import { BsArrowRight } from "react-icons/bs";
function Programs() {
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
        <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap">
          <span>
            <span className="stroke-text stroke-text-dark">Explore our</span>{" "}
            programs&nbsp;
          </span>
          <span className="stroke-text stroke-text-dark">to shape you</span>
        </h1>
      );
    } else {
      return (
        <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap">
          <span>
            <span className="stroke-text stroke-text-light">Shape</span>{" "}
            your&nbsp;
          </span>
          <span>ideal body</span>
        </h1>
      );
    }
  };
  return (
    <section
      id="programs"
      className="section min-h-screen w-[80vw] mt-20 px-10 flex flex-col justify-center items-center mx-auto"
    >
      {renderStrokeChanger()}
      <div className="my-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 ">
        {programsData.map((program, index) => (
          <div
            key={index}
            className="flex flex-col col-span-2 gap-4 shadow-lg dark:text-white dark:bg-zinc-400 items-start justify-center p-8 h-full hover:cursor-pointer dark:hover:bg-orange-400 hover:bg-orange-300 transition ease-in duration-150"
          >
            <span>{program.icon}</span>
            <h3>{program.title}</h3>
            <p className="text-start">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;
