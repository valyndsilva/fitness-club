import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://exercisedb.p.rapidapi.com/exercises", {
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.NEXT_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.NEXT_RAPIDAPI_HOST,
    },
  } as RequestInit);
  const data = await res.json();
  const exercisesData = data;
  // console.log(exercisesData);
  return NextResponse.json(exercisesData);
}
