import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { plansData } from "../data/plansData";
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
              <span className="stroke-text stroke-text-dark">
                Ready to start
              </span>{" "}
              your journey&nbsp;
            </span>
            <span className="stroke-text stroke-text-dark">now with us</span>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="space-y-2">
          <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap text-start">
            <span>
              <span className="stroke-text stroke-text-light">
                Ready to start
              </span>{" "}
              your journey&nbsp;
            </span>
            <span className="stroke-text stroke-text-light">now with us</span>
          </h1>
        </div>
      );
    }
  };
  return (
    <section
      id="programs"
      className="section mt-20 px-10 flex flex-col justify-center items-center"
    >
      {renderStrokeChanger()}
      <div className="my-10 grid grid-cols-1 md:grid-cols-3 p-5 gap-8 ">
        {plansData.map((plan) => (
          <div className="planCard flex flex-col gap-4 dark:text-white dark:bg-zinc-400 items-start justify-center p-8 h-full hover:cursor-pointer dark:hover:bg-orange-400 transition ease-in duration-150">
            <span>{plan.icon}</span>
            <h3 className="uppercase dark:text-white font-bold">
              {plan.title}
            </h3>
            <h4 className="uppercase dark:text-white font-bold text-4xl mb-2">
              $ {plan.price}
            </h4>
            {plan.features.map((feature, index) => (
              <div key={index} className="">
                <p className="flex gap-2 items-center text-start">
                  <BsCheck2Circle className="w-8 h-8 dark:text-white" />
                  {feature}
                </p>
              </div>
            ))}

            <p className="flex gap-2 items-center text-start text-sm">
              See more benefits <BsArrowRight className="w-5 h-5" />
            </p>
            <button className="flex items-center gap-4 dark:bg-white dark:text-black px-3 py-2 w-full text-center justify-center">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plans;
