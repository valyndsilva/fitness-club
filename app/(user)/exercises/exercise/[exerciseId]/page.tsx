"use client";
import React, { useContext, useEffect } from "react";
import {
  ExerciseDetail,
  ExerciseVideos,
  SimilarExercises,
} from "../../../components";
import exercisesContext from "@/context/exercisesContext";
import {
  // exerciseDetailData,
  exerciseVideosData,
  // equipmentExercisesData,
  // targetMuscleExercisesData,
} from "@/data/exerciseDbData";

type Props = {
  params: {
    exerciseId: string;
  };
};

export default function page({ params }: Props) {
  const { exerciseId } = params;
  // console.log(exerciseId);
  const {
    setExerciseDetail,
    setExerciseVideos,
    setTargetMuscleExercises,
    setEquipmentExercises,
  } = useContext(exercisesContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });


      const fetchExercisesData=async()=>{
         const exerciseDetailResponse = await fetch(`/api/exercises/exercise/${exerciseId}`);
         const exerciseDetailData  = await exerciseDetailResponse.json();
        console.log({exerciseDetailData});
        setExerciseDetail(exerciseDetailData);
        // Use dummy data from db
        // console.log(exerciseDetailData);
        // setExerciseDetail(exerciseDetailData);
        const fetchYoutubeSearchUrl = async () => {
          const exerciseVideosResponse = await fetch(`/api/youtubeSearchUrl/${exerciseDetailData.name}`);
          const exerciseVideosData = await exerciseVideosResponse.json();
          console.log(exerciseVideosData);
         return setExerciseVideos(exerciseVideosData.contents);
  
          //Use dummy data from db
          // console.log(exerciseVideosData);
          // return setExerciseVideos(exerciseVideosData);
        };
        fetchYoutubeSearchUrl();

          const fetchTargetMuscleExercises = async () => {
            const targetMuscleExercisesResponse = await fetch(
              `/api/exercises/target/${exerciseDetailData.target}`
            );
            const targetMuscleExercisesData =
              await targetMuscleExercisesResponse.json();
            console.log({targetMuscleExercisesData});
            return setTargetMuscleExercises(targetMuscleExercisesData);

            //Use dummy data from db
            //  console.log(targetMuscleExercisesData);
            //  return setTargetMuscleExercises(targetMuscleExercisesData);
          };
          fetchTargetMuscleExercises();

          const fetchEquipementExercises = async () => {
            const equipmentExercisesResponse = await fetch(
              `/api/exercises/equipment/${exerciseDetailData.equipment}`
            );
            const equipmentExercisesData =
              await equipmentExercisesResponse.json();
            console.log({equipmentExercisesData});
            return setEquipmentExercises(equipmentExercisesData);

            //Use dummy data from db
            //   console.log({equipmentExercisesData});
            //  return setEquipmentExercises(equipmentExercisesData);
          };
          fetchEquipementExercises();
      }
      fetchExercisesData();
  }, [exerciseId]);
  return (
    <div className="relative pt-32 w-full items-center max-w-7xl justify-center mx-auto">
      <ExerciseDetail />
      <ExerciseVideos />
      <SimilarExercises />
    </div>
  );
}
