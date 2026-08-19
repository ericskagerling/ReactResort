import { Hotel } from "../types/Hotel";

const BASE_URL = "https://aspcode.net/api/db/HotelAPI/hotels";

export async function getHotels(): Promise<Hotel[]> {
  /* const response = await fetch(`${BASE_URL}/hotels`); */
  const response = await fetch(BASE_URL, {
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

export async function getHotelById(id: string): Promise<Hotel> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      "X-API-KEY": process.env.HOTEL_API_KEY!,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch hotel");
  }
  return response.json();
}
