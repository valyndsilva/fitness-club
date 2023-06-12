"use client";
import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import HorizontalScrollBar from "./HorizontalScrollBar";
import exercisesContext from "@/context/exercisesContext";
// import { bodyPartsData, exercisesData } from "@/data/exerciseDbData";

export default function SearchExercises() {
  const { bodyParts, setBodyParts, setExercises, exercises } =
    useContext(exercisesContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      const bodyPartsResponse = await fetch("api/exercises/bodyPartList", {
        cache: "no-store",
      });
      const bodyPartsData = await bodyPartsResponse.json();
      // console.log(bodyPartsData);
      //  setBodyParts([...bodyPartsData]);
      setBodyParts(["all", ...bodyPartsData]);

      // Use dummy data
      // setBodyParts(["all", ...bodyPartsData]);
      // setBodyParts([...bodyPartsData]);
    };
    fetchBodyPartsData();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      const fetchExercisesData = async () => {
        const exercisesResponse = await fetch("api/exercises", {
          cache: "no-store",
        });
        const exercisesData = await exercisesResponse.json();
        // console.log(exercisesData);

        // Use dummy data
        // console.log(exercisesData);

        const searchedExercises = exercisesData.filter(
          (exercise: any) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );
        // console.log(searchedExercises);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        setSearch("");
        setExercises(searchedExercises);
      };
      fetchExercisesData();
    }
  };

  const renderStrokeChanger = () => {
    const { theme } = useTheme();
    // console.log({ theme });
    if (theme === "dark") {
      return (
        <h1 className="flex flex-col text-3xl lg:text-7xl font-bold uppercase flex-wrap">
          <span>
            <span className="stroke-text stroke-text-dark">Must-Know </span>
          </span>
          <span className="stroke-text stroke-text-dark">Exercises</span>
        </h1>
      );
    } else {
      return (
        <h1 className="flex flex-col text-3xl lg:text-7xl font-bold uppercase flex-wrap">
          <span>
            <span className="stroke-text stroke-text-light">Must-Know </span>
          </span>
          <span>Exercises</span>
        </h1>
      );
    }
  };
  return (
    <section
      id="search-exercises"
      className="section min-h-screen w-[80vw] mt-20 px-10 flex flex-col justify-center items-center mx-auto"
    >
      {renderStrokeChanger()}
      <form
        className="flex flex-col lg:flex-row items-center justify-center relative mb-10"
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="text"
          className="mt-10 w-[350px] lg:w-[800px] px-10 h-20 caret-blue-500 focus:caret-indigo-500 font-medium rounded-md"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <button
          type="submit"
          className="flex items-center justify-center lg:absolute right-0 mt-5 lg:mt-10 w-[175px] h-20 rounded-md bg-orange-500 text-white px-3.5 py-2.5 text-sm lg:text-lg font-semibold shadow-sm hover:bg-orange-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          Search
        </button>
      </form>
      <p className="mb-5 text-xl">
        Choose a body part below to view exercises targeted for that specific
        area:
      </p>
      <HorizontalScrollBar data={bodyParts} bodyParts />
    </section>
  );
}
