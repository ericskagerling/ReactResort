const BASE_URL = "https://aspcode.net/api/db/HotelAPI/bookings";

export const getBookings = async (limit: number, offset: number) => {
  try {
    const response = await fetch(`${BASE_URL}`,
      {
        headers: {
          "X-API-KEY": process.env.HOTEL_API_KEY!,
        },
      },
    );

    if (!response.ok) throw new Error("Failed to fetch bookings")

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

//?limit=${limit}&offset=${offset}
