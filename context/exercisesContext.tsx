"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { exerciseOptions } from "@/utils/fetchData";
import { bodyPartsData } from "@/data/exerciseDbData"; // dummy data

interface ExercisesProviderProps {
  children: ReactNode;
}

interface Exercises {
  bodyPart: string;
  setBodyPart: any;
  bodyParts: any;
  setBodyParts: any;
  setExercises: any;
  exercises: any;
  // exercisesData: any;
  // bodyPartsData: any;
  exerciseDetail: any;
  setExerciseDetail: any;
  exerciseVideos: any;
  setExerciseVideos: any;
  targetMuscleExercises: any;
  setTargetMuscleExercises: any;
  equipmentExercises: any;
  setEquipmentExercises: any;
  searchTerm:any;
  setSearchTerm:any;
}
export const exercisesContext = createContext<Exercises>({} as Exercises);

export function ExercisesProvider({ children }: ExercisesProviderProps) {
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  // const [mounted, setMounted] = useState(false);
  // SearchExercises States
  const [bodyPart, setBodyPart] = useState("all");
  const [bodyParts, setBodyParts] = useState<any>([]);
  const [exercises, setExercises] = useState<any>([]);

  // ExerciseDetail States
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <exercisesContext.Provider
      value={{
        bodyPart,
        setBodyPart,
        bodyParts,
        setBodyParts,
        setExercises,
        exercises,
        // exercisesData,
        // bodyPartsData,
        exerciseDetail,
        setExerciseDetail,
        exerciseVideos,
        setExerciseVideos,
        targetMuscleExercises,
        setTargetMuscleExercises,
        equipmentExercises,
        setEquipmentExercises,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </exercisesContext.Provider>
  );
}

export default exercisesContext;
