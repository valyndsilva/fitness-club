"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";
import img1 from "app/assets/reasons-img.png";
import nb from "app/assets/nb.png";
import adidas from "app/assets/adidas.png";
import nike from "app/assets/nike.png";
import { BsCheck2Circle } from "react-icons/bs";

function Reasons() {
  const renderStrokeChanger = () => {
    const { theme } = useTheme();
    console.log({ theme });
    if (theme === "dark") {
      return (
        <div className="space-y-2">
          <span className="flex flex-col text-lg font-semibold uppercase text-orange-400 text-start">
            some reasons
          </span>
          <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap text-start">
            <span>
              <span className="stroke-text stroke-text-dark">Why</span> choose
              us?&nbsp;
            </span>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="space-y-2">
          <span className="flex flex-col text-lg font-semibold uppercase text-orange-400 text-start">
            some reasons
          </span>
          <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap text-start">
            <span>
              <span className="stroke-text stroke-text-light">Why</span> choose
              us?&nbsp;
            </span>
          </h1>
        </div>
      );
    }
  };
  return (
    <section
      id="reasons"
      className="section min-h-screen grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center w-[80vw] mx-auto"
    >
      <div className="col-span-2 md:col-span-2 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="relative">
              <Image src={img1} alt="image1" className="bg-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        {renderStrokeChanger()}
        <div className="mt-10 space-y-2 dark:text-white text-lg text-start">
          <p>
            At Fitness Club, we believe in empowering individuals to lead
            healthy and active lives. Our mission is to provide the resources
            and support necessary to help you achieve your fitness goals.
          </p>
           <p className="flex gap-4  items-center ">
            <BsCheck2Circle className="w-8 h-8 text-orange-400" />
            Over 500+ targeted exercises
          </p>
          <p className="flex gap-4  items-center">
            <BsCheck2Circle className="w-8 h-8 text-orange-400" />
            Train smarter and faster than before
          </p>
          <p className="flex gap-4  items-center">
            <BsCheck2Circle className="w-8 h-8 text-orange-400" />
            Reliable parteners
          </p> 
        </div>
        <div className="flex flex-col mt-10 text-start">
          <h4 className="uppercase text-lg dark:text-zinc-400 mb-4">
            Our partners
          </h4>
          <div className="flex space-x-8">
            <div className="relative w-10">
              <Image src={nb} alt="image1" className="bg-cover" />
            </div>
            <div className="relative w-10">
              <Image src={adidas} alt="image1" className="bg-cover" />
            </div>
            <div className="relative w-10">
              <Image src={nike} alt="image1" className="bg-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reasons;
