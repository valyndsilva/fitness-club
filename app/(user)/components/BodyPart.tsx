import React from "react";
// import Icon from "app/assets/icons/gym.png";
import All from "app/assets/bodyParts/all.png";
import Back from "app/assets/bodyParts/back.png";
import Cardio from "app/assets/bodyParts/cardio.png";
import Chest from "app/assets/bodyParts/chest.png";
import LowerArms from "app/assets/bodyParts/lower-arms.png";
import UpperArms from "app/assets/bodyParts/upper-arms.png";
import LowerLegs from "app/assets/bodyParts/lower-legs.png";
import UpperLegs from "app/assets/bodyParts/upper-legs.png";
import Neck from "app/assets/bodyParts/neck.png";
import Shoulders from "app/assets/bodyParts/shoulders.png";
import Waist from "app/assets/bodyParts/waist.png";
import Abs from "app/assets/bodyParts/abs.png";
import Image from "next/image";
type Props = {
  item: any;
  setBodyPart: any;
  bodyPart: any;
};

export default function BodyPart({ item, setBodyPart, bodyPart }: Props) {
  return (
    <div
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      className={`${
        bodyPart === item && "border-t-4 border-t-orange-400 bg-white "
      } w-[270px] h-[282px] cursor-pointer gap-12 flex flex-col items-center justify-center text-[#3A1212]  font-medium capitalize text-xl bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg px-5 py-2.5 text-center dark:focus:ring-gray-600 dark:bg-zinc-600 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 group`}
    >
      <div className="group-hover:scale-125 transition-all duration-250 ease-in items-center flex flex-col space-y-4 justify-center">
        {item ==="all" &&    <Image src={All} alt="all" width={80} height={80} />}
        {item ==="back" &&    <Image src={Back} alt="all" width={80} height={80} />}
        {item ==="cardio" &&    <Image src={Cardio} alt="all" width={80} height={80} />}
        {item ==="chest" &&    <Image src={Chest} alt="all" width={80} height={80} />}
        {item ==="lower arms" &&    <Image src={LowerArms} alt="all" width={80} height={80} />}
        {item ==="upper arms" &&    <Image src={UpperArms} alt="all" width={80} height={80} />}
        {item ==="lower legs" &&    <Image src={LowerLegs} alt="all" width={80} height={80} />}
        {item ==="upper legs" &&    <Image src={UpperLegs} alt="all" width={80} height={80} />}
        {item ==="neck" &&    <Image src={Neck} alt="all" width={80} height={80} />}
        {item ==="shoulders" &&    <Image src={Shoulders} alt="all" width={80} height={80} />}
        {item ==="waist" &&    <Image src={Waist} alt="all" width={80} height={80} />}
        {item ==="abs" &&    <Image src={Abs} alt="all" width={80} height={80} />}
        {/*  <Image src={Icon} alt="dumbbell" width={40} height={40} />*/}
        <span className="text-orange-500"> {item}</span>
      </div>
    </div>
  );
}
