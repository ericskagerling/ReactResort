"use server";

import { createBooking } from "../lib/bookingsService";
import { bookingSchema } from "../types/Booking";
import { isHotelAvailable } from "../utils/hotelAvailability";

type BookingState = {
  success: boolean;
  error?: string;
  // errors: {
  //   checkInDate?: string[];
  //   checkOutDate?: string[];
  //   customerId?: string[];
  //   guests?: string[];
  // }
}

export const createBookingAction = async (_previousState: BookingState, formData: FormData) => {
  const booking = {
    checkInDate: formData.get("checkInDate"),
    checkOutDate: formData.get("checkOutDate"),
    customerId: formData.get("customerId"),
    guests: formData.get("guests"),
    hotelId: formData.get("hotelId"),
  };

  const result = bookingSchema.safeParse(booking);

  if (!result.success) {
    return {
      success: false,
      error: "test",
      errors: result.error.flatten().fieldErrors,
    }
  }

  const hotelAvailable = await isHotelAvailable(result.data);

  if (!hotelAvailable.success) {
    return hotelAvailable;
  }

  console.log(result.data);
  
  // await createBooking(result.data);

  return {
    success: true,
  }
};
