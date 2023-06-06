import React, { useContext } from "react";
import Loader from "./Loader";
import exercisesContext from "@/context/exercisesContext";

export default function ExerciseVideos() {
  const { exerciseDetail, exerciseVideos } = useContext(exercisesContext);
  if (!exerciseVideos.length) return <Loader />;
  return (
    <div className="mt-5 p-5">
      <h2 className="text-2xl lg:text-4xl font-bold text-black mb-8 ml-5 mt-16 lg:mt-24 dark:text-zinc-200">
        Watch{" "}
        <span style={{ color: "#F87315", textTransform: "capitalize" }}>
          {exerciseDetail.name}
        </span>{" "}
        exercise videos
      </h2>
      <div className="grid lg:grid-cols-9 gap-4">
        {exerciseVideos?.slice(0, 3)?.map((item: any, index: number) => (
          <div className="col-span-1 lg:col-span-3" key={index}>
            <div className="flex flex-col items-center justify-center mb-5">
              <a
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item?.video?.thumbnails[0].url}
                  alt={item?.video?.title}
                  className="w-full h-60 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-md text-black dark:text-zinc-200 pt-5">
                    {item?.video?.title}
                  </h4>
                  <h4 className="text-sm text-black dark:text-zinc-200 font-bold">
                    {item?.video?.channelName}
                  </h4>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
