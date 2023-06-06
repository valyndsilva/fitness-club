"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { plansData } from "@/data/plansData";
import { FaCrown } from "react-icons/fa";
import Link from "next/link";
function Plans() {
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
          <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap text-start">
            <span>
              <span className="stroke-text stroke-text-dark">Start your</span>{" "}
              fitness&nbsp;
            </span>
            <span className="stroke-text stroke-text-dark"> journey now</span>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="space-y-2">
          <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap text-start">
            <span>
              <span className="stroke-text stroke-text-light">Start</span> your
              fitness&nbsp;
            </span>
            <span className="stroke-text stroke-text-light"> journey now</span>
          </h1>
        </div>
      );
    }
  };
  return (
    <section id="plans" className="relative">
      <div className="lg:blur-spot1 lg:blur-[150px] lg:plan-blur-1"></div>
      <div className="lg:blur-spot2 lg:blur-[150px] lg:plan-blur-2"></div>
      <div className="section min-h-screen mt-20 flex flex-col justify-center items-center w-[80vw] mx-auto">
        {renderStrokeChanger()}
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 p-5 gap-8 ">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className="planCard shadow-lg flex flex-col gap-4 dark:text-white dark:bg-zinc-400 items-start justify-center p-8 h-full hover:cursor-pointer dark:hover:bg-orange-400 hover:bg-orange-300 transition ease-in duration-150"
            >
              <div className="flex items-center justify-between w-full space-x-4">
                <div className="flex items-center space-x-2">
                  <span>{plan.icon}</span>
                  <h3 className="uppercase dark:text-white font-bold">
                    {plan.title}
                  </h3>
                </div>
                <h4 className="uppercase dark:text-white font-bold text-4xl mb-2">
                  £{plan.price}
                </h4>
              </div>

              {plan.features.map((feature, index) => (
                <div key={index} className="">
                  <p className="flex gap-2 items-center text-start">
                    <BsCheck2Circle className="w-8 h-8 dark:text-white" />
                    {feature}
                  </p>
                </div>
              ))}
              <Link href="/exercises">
                <button className="flex items-center gap-4  shadow-lg rounded-md bg-zinc-400  text-white dark:bg-white hover:shadow-md  dark:hover:text-white dark:hover:bg-zinc-600 hover:bg-zinc-600 dark:text-black px-3 py-2 w-full text-center justify-center">
                  Join Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
