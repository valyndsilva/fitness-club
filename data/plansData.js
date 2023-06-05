import { FaCrown, FaDumbbell } from "react-icons/fa";
import { GiHeartPlus } from "react-icons/gi";

export const plansData = [
  {
    icon: <GiHeartPlus className="w-10 h-10 fill-white" />,
    title: "BASIC PLAN",
    price: "35",
    features: [
      "1 month Access",
      "Personalized Workout Plans",
      "No Recurring Charges",
    ],
  },
  {
    icon: <FaCrown className="w-10 h-10 fill-white" />,
    title: "PREMIUM PLAN",
    price: "85",
    features: [
      "3 months Access",
      "Personalized Workout Plans",
      "No Recurring Charges",
    ],
  },
  {
    icon: <FaDumbbell className="w-10 h-10 fill-white" />,
    title: "PRO PLAN",
    price: "175",
    features: [
      "6 months Access",
      "Personalized Workout Plans",
      "No Recurring Charges",
    ],
  },
];
