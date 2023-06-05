import React, { useContext } from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";
import exercisesContext from "@/context/exercisesContext";

type Props = {};

export default function SimilarExercises({}: Props) {
  const { targetMuscleExercises, equipmentExercises } =
    useContext(exercisesContext);
  return (
    <div className="flex flex-col mt-5">
<h4 className="text-2xl lg:text-4xl font-bold text-black mb-8 ml-5 mt-16 lg:mt-24 dark:text-zinc-200">
        Similar{" "}
        <span style={{ color: "#F87315", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </h4>
      <div className="flex p-2 relative">
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </div>
      <h4 className="text-2xl lg:text-4xl font-bold text-black mb-8 ml-5 mt-16 lg:mt-24 dark:text-zinc-200">
        Similar{" "}
        <span style={{ color: "#F87315", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </h4>
      <div className="flex p-2 relative">
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
