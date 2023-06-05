import React from "react";
import { Exercises, ExercisesHero, SearchExercises } from "../components";

export default function page() {
  return (
    <div>
      <ExercisesHero />
      <SearchExercises />
      <Exercises />
    </div>
  );
}
