export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.NEXT_RAPIDAPI_HOST,
  },
};

export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
