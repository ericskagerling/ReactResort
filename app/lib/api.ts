import { Hotel } from "../types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getHotels(): Promise<Hotel[]> {
  const response = await fetch(`${BASE_URL}/hotels`);

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
