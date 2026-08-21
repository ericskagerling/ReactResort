import z from "zod";

export type Booking = {
    checkInDate: string;
    checkOutDate: string;
    hotelId: string;
    customerId: string;
    guests: number;
};

export const bookingSchema = z
  .object({
    checkInDate: z.iso.date(),
    checkOutDate: z.iso.date(),
    hotelId: z.string().uuid(),
    customerId: z.string().uuid(),
    guests: z.coerce.number().min(1),
  })
  .refine((booking) => booking.checkOutDate > booking.checkInDate, {
    message: "Checkout can not happen before checkin",
    path: ["checkOutDate"],
  })
  .refine(
    (booking) => booking.checkInDate >= new Date().toISOString().split("T")[0],
    {
      message: "Checkin can not be in the past",
      path: ["checkInDate"],
    },
  );
