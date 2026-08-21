import { Booking } from "../types/Booking";
import { BookingResponse } from "../types/BookingResponse";

const BASE_URL = "https://aspcode.net/api/db/HotelAPI/bookings";

export const getBookings = async (
  limit?: number,
  offset?: number,
): Promise<BookingResponse[]> => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      headers: {
        "X-API-KEY": process.env.HOTEL_API_KEY!,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch bookings");

    return response.json();
  } catch (error) {
    console.error(error);
  }

  return [];
};

//?limit=${limit}&offset=${offset}

export const createBooking = async (booking: Booking) => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "X-API-KEY": process.env.HOTEL_API_KEY!,
      },
      body: JSON.stringify(booking),
    });

    if (!response.ok) {
      throw new Error("Failed to create booking");
    }
  } catch (error) {
    console.error(error);
  }
};
