import { Hotel } from "../types/Hotel";

const BASE_URL = "https://aspcode.net/api/db/HotelAPI/hotels";

export async function getHotels(
  limit?: number,
  offset?: number,
): Promise<Hotel[]> {
  const response = await fetch(`${BASE_URL}`, {
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

//Create hotel
export async function createHotel(name: string, address: string) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": process.env.HOTEL_API_KEY!,
    },
    body: JSON.stringify({
      name,
      address,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create hotel");
  }

  return response.json();
}

//?limit=${limit}&offset=${offset}