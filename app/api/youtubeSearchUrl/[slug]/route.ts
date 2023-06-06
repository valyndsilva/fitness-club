import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  // console.log(params);
  const slug = params?.slug;
  // console.log(slug);
  const res = await fetch(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${slug}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.NEXT_RAPIDAPI_YT_HOST,
      },
    } as RequestInit
  );
  const data = await res.json();
  const youtubeSearchUrlData = data;
  return NextResponse.json(youtubeSearchUrlData);
}
