export const getBookings = async () => {
  try {
    const response = await fetch(
      "https://aspcode.net/api/db/HotelAPI/bookings",
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
