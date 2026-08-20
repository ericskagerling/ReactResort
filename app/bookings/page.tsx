import { getBookings } from "../lib/bookingsService";
import { getHotels } from "../lib/hotelService";
import { getCustomers } from "../lib/customerService";
import { BookingPresentation } from "./BookingPresentation";
export default async function Bookings() {
  const [bookings, customers, hotels] = await Promise.all([
    getBookings(),
    getCustomers(),
    getHotels(),
  ]);

  return (
      <BookingPresentation bookings={bookings} customers={customers} hotels={hotels} />
  );
}
