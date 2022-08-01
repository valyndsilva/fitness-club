import { FaCrown, FaDumbbell } from "react-icons/fa";
import { GiHeartPlus } from "react-icons/gi";

export const plansData = [
  {
    icon: <GiHeartPlus className="w-10 h-10 fill-white" />,
    title: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: <FaCrown className="w-10 h-10 fill-white" />,
    title: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Accessto minibar",
    ],
  },
  {
    icon: <FaDumbbell className="w-10 h-10 fill-white" />,
    title: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
