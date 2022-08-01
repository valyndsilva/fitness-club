import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
              level up your body&nbsp;
            </span>
            <span className="stroke-text stroke-text-dark">with us?</span>
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
            </span>
            <span className="stroke-text stroke-text-light">with us?</span>
          </h1>
        </div>
      );
    }
  };

  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rznezqo",
        "template_8jjnuyc",
        form.current,
        "eC_qDU9bbMahnmCUF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="join-us"
      className="section mt-20 flex  dark:bg-zinc-500 bg-zinc-400 border-t"
    >
      <div className="my-10  grid grid-cols-3 gap-8 w-[80vw] mx-auto items-center justify-center ">
        <div className="col-span-3 lg:col-span-2 my-10">
          {renderStrokeChanger()}
        </div>
        <form
          ref={formRef}
          action=""
          className="email-container flex col-span-3  lg:col-span-1 justify-center items-center  px-4 py-5 hover:cursor-pointer bg-orange-400  border rounded shadow-lg transition ease-in duration-150"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address"
            className="w-2/3 items-center text-start text-sm mr-5 bg-zinc-400 text-zinc-800  placeholder:text-zinc-800 border  px-5 py-2 rounded  outline-none "
          />
          <button
            className="w-1/3 items-center bg-white text-zinc-800 px-3 py-2 text-center justify-center rounded"
            onSubmit={sendEmail}
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default JoinUs;
