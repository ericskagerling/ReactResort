import { getBookings } from "../lib/bookingsService";
import { Booking } from "../types/Booking";

export const isHotelAvailable = async (newBooking: Booking) => {
  const bookings = await getBookings();

  const matchedBookings = bookings.filter(
    (b) =>
      b.data.hotelId === newBooking.hotelId &&
      b.data.checkInDate < newBooking.checkOutDate &&
      b.data.checkOutDate > newBooking.checkInDate,
  );

  if (matchedBookings.length >= 3) {
    return {
      success: false,
      error: "Hotel is fully booked, choose another date",
    };
  }

  return {
    success: true,
  };
};
