import { BiDumbbell, BiRun } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { FaHeartbeat } from "react-icons/fa";
export const programsData = [
  {
    icon: <BiDumbbell className="w-10 h-10 fill-white" />,
    title: "Strength Training",
    description:
      "You are trained to improve your strength through variety of exercises.",
  },
  {
    icon: <BiRun className="w-10 h-10 fill-white" />,
    title: "Cardio Training",
    description:
      "You are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    icon: <AiFillFire className="w-10 h-10 fill-white" />,
    title: "Fat Burning",
    description:
      "Suitable for those who want to get rid of excess fat and lose weight.",
  },
  {
    icon: <FaHeartbeat className="w-10 h-10 fill-white" />,
    title: "Health Fitness",
    description:
      "Designed for those who exercise only for body fitness not body building.",
  },
];
