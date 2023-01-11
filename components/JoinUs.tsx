import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { sendContactForm } from "../services";
function JoinUs() {
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
              <span className="stroke-text stroke-text-dark">Ready to</span>{" "}
              level up your body&nbsp;{" "}
              <span className="stroke-text stroke-text-dark">with us?</span>
            </span>
          </h1>
        </div>
      );
    } else {
      return (
        <div className="space-y-2">
          <h1 className="flex flex-col text-5xl font-bold uppercase flex-wrap text-start">
            <span>
              <span className="stroke-text stroke-text-light">Ready to</span>{" "}
              level up your body&nbsp;
              <span className="stroke-text stroke-text-light">with us?</span>
            </span>
          </h1>
        </div>
      );
    }
  };

  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e: {
    preventDefault: () => void;
    target: { value: any }[];
  }) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");
      // formRef.current.reset();
      // document.getElementById("contact-form")!.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  return (
    <section
      id="join-us"
      className="section mt-20 flex  dark:bg-zinc-800 bg-zinc-400 border-t"
    >
      <div className="my-10 flex flex-col gap-8 w-[80vw] mx-auto items-center justify-center ">
        <div className=" my-10">{renderStrokeChanger()}</div>
        {message && (
          <div className="planCard flex justify-center p-4 rounded-lg items-center">
            {message}
            <span
              onClick={() => setMessage("")}
              className="ml-4 items-center justify-center cursor-pointer"
            >
              <AiFillCloseCircle className="w-5 h-5 text-white" />
            </span>
          </div>
        )}
        <form
          id="contact-form"
          ref={formRef}
          onSubmit={submitContact}
          className="flex flex-wrap -m-2 md:w-1/2 mx-auto"
        >
          <div className="p-2 w-full md:w-1/2">
            <div className="relative">
              <input
                required
                placeholder="Name*"
                type="text"
                minLength={3}
                maxLength={25}
                id="name"
                name="name"
                className="w-full dark:bg-transparent bg-opacity-50 rounded-lg border dark:border-slate-300   text-base outline-none dark:text-zinc-400 dark:placeholder:text-zinc-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-1/2">
            <div className="relative">
              <input
                required
                placeholder="Email Address*"
                type="email"
                id="email"
                name="email"
                className="w-full dark:bg-transparent bg-opacity-50 rounded-lg border dark:border-slate-300   text-base outline-none dark:text-zinc-400 dark:placeholder:text-zinc-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <textarea
                required
                placeholder="Leave a message*"
                id="message"
                name="message"
                className="w-full dark:bg-transparent bg-opacity-50 rounded-lg border dark:border-zinc-300   text-base outline-none dark:text-zinc-400 dark:placeholder:text-zinc-400 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 mx-auto">
            <button
              type="submit"
              className="flex items-center justify-center text-center space-x-4 font-light text-sm font-firacode  shadow-md bg-zinc-500 hover:bg-orange-400 dark:hover:bg-orange-400 hover:text-zinc-800 hover:font-medium  text-zinc-200 dark:bg-zinc-400 dark:text-zinc-800 px-4 py-3 rounded-lg"
            >
              {/* <button className="flex space-x-4 text-md bg-transparent hover:bg-orange-500 dark:text-white border border-orange-400 rounded-md  p-2 shadow-lg transition-all ease-in duration-300 hover:cursor-pointer"> */}
              <BiPaperPlane className="w-5 h-5" />
              <p>Send Message</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default JoinUs;
