import Link from "next/link";
import React from "react";

type Props = {
  exercise: any;
};

export default function ExerciseCard({ exercise }: Props) {
  return (
    <Link
      className="flex flex-col justify-between pb-2 transition-all duration-300 ease-in-out rounded-md "
      href={`/exercises/exercise/${exercise.id}`}
    >
      <div
        className={`cursor-pointer gap-12 flex flex-col items-center justify-center text-[#3A1212]  font-medium capitalize text-xl bg-white border border-gray-200 rounded-lg px-5 py-2.5 text-center dark:focus:ring-gray-600 mr-2 mb-2`}
      >
        <div className=" transition-all duration-250 ease-in items-center flex flex-col space-y-4 justify-center">
          <img src={exercise?.gifUrl} alt={exercise?.name} loading="lazy" />
          <div className="flex">
            <button className="rounded-xl capitalize text-sm bg-[#FFA9A9] text-white ml-5 px-2 py-2">
              {exercise?.bodyPart}
            </button>
            <button className="rounded-xl capitalize text-sm bg-[#FCC757] text-white ml-5  px-2 py-2">
              {exercise?.target}
            </button>
          </div>
          <p className="text-lg font-bold mt-2 ml-5 pb-2 text-black capitalize">
            {exercise?.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
