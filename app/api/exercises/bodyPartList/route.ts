import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", {
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.NEXT_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.NEXT_RAPIDAPI_HOST,
    },
  } as RequestInit);
  const data = await res.json();
  const bodyPartListData = data;
  return NextResponse.json(bodyPartListData);
}
