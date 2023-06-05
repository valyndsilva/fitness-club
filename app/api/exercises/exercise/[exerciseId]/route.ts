import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { exerciseId: string } }
) {
  console.log(params);
  const exerciseId = params?.exerciseId;
  console.log(exerciseId);
  const res = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.NEXT_RAPIDAPI_HOST,
      },
    } as RequestInit
  );
  const data = await res.json();
  const bodyPartData = data;
  return NextResponse.json(bodyPartData);
}
