"use client";
import exercisesContext from "@/context/exercisesContext";
import React, { useContext, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Loader from "./Loader";
import ExerciseCard from "./ExerciseCard";
// import { exercisesData } from "@/data/exerciseDbData";

export default function Exercises() {
  const { exercises,setExercises, bodyPart } = useContext(exercisesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  console.log({exercises});
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event: any, value: React.SetStateAction<number>) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

   useEffect(() => {
    const fetchExercisesData = async () => {
      let data = [];
      if (bodyPart === "all") {
         const exercisesResponse = await fetch("api/exercises");
         const exercisesData = await exercisesResponse.json();
         console.log({exercisesData}); 
         data = exercisesData;
        
        // Use dummy data
        // data = exercisesData;
      } else {
        const bodyPartResponse = await fetch(
          `api/exercises/bodyPart/${bodyPart}`
        );
        const bodyPartData = await bodyPartResponse.json();
        console.log(bodyPartData);
        data = bodyPartData;


        // Use dummy data
        // const bodyPartData = exercisesData.filter(
        //   (exercise: any) =>
        //     exercise.name.toLowerCase().includes(bodyPart) ||
        //     exercise.target.toLowerCase().includes(bodyPart) ||
        //     exercise.equipment.toLowerCase().includes(bodyPart) ||
        //     exercise.bodyPart.toLowerCase().includes(bodyPart)
        // );
        // console.log(bodyPartData);
        // data = bodyPartData;
      }
      setExercises(data);
    };
    fetchExercisesData();
  }, [bodyPart]);

  if (!currentExercises.length) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h4 className="text-3xl lg:text-4xl mb-10">
        Exercise results for{" "}
        <span className="font-medium capitalize text-orange-500">{bodyPart}</span>:
      </h4>
      <div className="grid md:grid-cols-6 lg:grid-cols-9 gap-4">
        {currentExercises?.map((exercise: any, idx: number) => (
          <div className=" col-span-1 md:col-span-3 lg:col-span-3" key={idx}>
            <ExerciseCard key={idx} exercise={exercise} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        {exercises.length > 9 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            color="primary"
            shape="rounded"
            defaultPage={1}
            size="large"
          />
        )}
        
      </div>
    </div>
  );
}
