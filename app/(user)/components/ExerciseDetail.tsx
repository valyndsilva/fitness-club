"use client";
import React, { useContext } from "react";
import BodyPartImage from "app/assets/icons/body-part.png";
import TargetImage from "app/assets/icons/target.png";
import EquipmentImage from "app/assets/icons/equipment.png";
import exercisesContext from "@/context/exercisesContext";
import Image from "next/image";
type Props = {};

export default function ExerciseDetail({}: Props) {
  const { exerciseDetail } = useContext(exercisesContext);
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row p-5 items-center gap-16 dark:text-zinc-200">
      <img
        src={gifUrl}
        alt={name}
        width="500"
        height="500"
        loading="lazy"
        className="rounded-xl"
      />
      <div className="flex flex-col gap-5 lg:gap-8">
        <h3 className="text-2xl lg:text-5xl font-bold capitalize">{name}</h3>
        <h6 className="text-lg lg:text-2xl text-[#4F4C4C] dark:text-zinc-200">
          <span style={{ textTransform: "capitalize" }}>{name}</span> is one of
          the best exercises to target your {target}. It will help you improve
          your mood and gain energy.
        </h6>
        {extraDetail?.map((item, id) => (
          <div className="flex gap-6 items-center" key={id}>
            <div className=" flex items-center justify-center w-24 h-24 rounded-full bg-[#FFF2DB]">
              <Image
                src={item?.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <h3 className="capitalize text-xl lg:text-2xl">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
