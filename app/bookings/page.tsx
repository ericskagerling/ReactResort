import { getBookings } from "../lib/bookingsService";
import { BookingPresentation } from "./BookingPresentation";

export default async function Bookings() {
  const bookings = await getBookings();

  return (
      <BookingPresentation bookings={bookings} />
  );
}
