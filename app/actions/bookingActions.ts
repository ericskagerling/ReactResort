"use server";

import { createBooking } from "../lib/bookingsService";
import { bookingSchema } from "../types/Booking";

export const createBookingAction = async (formData: FormData) => {
  const booking = {
    checkInDate: formData.get("checkInDate"),
    checkOutDate: formData.get("checkOutDate"),
    customerId: formData.get("customerId"),
    guests: formData.get("guests"),
    hotelId: formData.get("hotelId"),
  };

  const result = bookingSchema.safeParse(booking);

  if (!result.success) {
    console.error(result.error.issues);
    return;
  }

  await createBooking(result.data);
};
