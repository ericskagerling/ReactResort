import { Hotel } from "../types/Hotel";

const BASE_URL = "https://aspcode.net/api/db/HotelAPI/hotels";

export async function getHotels(
  limit: number,
  offset: number,
): Promise<Hotel[]> {
  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`, {
    headers: {
      "X-API-KEY": process.env.HOTEL_API_KEY!,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch hotels");
  }

  const data = await response.json();
  return data;
}
