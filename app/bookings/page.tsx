import { getBookings } from "../services/bookingsService";
import { BookingPresentation } from "./BookingPresentation";

export default async function Bookings() {
  const bookings = await getBookings();

  return (
      <BookingPresentation bookings={bookings} />
  );
}
