import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import img1 from "../public/assets/reasons-img.png";
import nb from "../public/assets/nb.png";
import adidas from "../public/assets/adidas.png";
import nike from "../public/assets/nike.png";
import { BsCheck2Circle } from "react-icons/bs";

function Reasons() {
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
      id="reason"
      className="section grid grid-cols-1 md:grid-cols-3 gap-8 px-10 justify-center items-center "
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
        <div className="mt-10 space-y-2 uppercase dark:text-white text-lg text-start">
          <p className="flex gap-4  items-center ">
            <BsCheck2Circle className="w-8 h-8 text-orange-400" />
            Over 140+ Expert Coaches
          </p>
          <p className="flex gap-4 uppercase  items-center">
            <BsCheck2Circle className="w-8 h-8 text-orange-400" />
            Train smarter and faster than before
          </p>
          <p className="flex gap-4 uppercase  items-center">
            <BsCheck2Circle className="w-8 h-8 text-orange-400" />1 free program
            for new members
          </p>
          <p className="flex gap-4 uppercase  items-center">
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
