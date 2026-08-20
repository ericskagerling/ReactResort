import { Pagination } from "../components/Pagination";
import { getBookings } from "../lib/bookingsService";
import { getHotels } from "../lib/hotelService";
import { getCustomers } from "../lib/customerService";
import { getPagination } from "../utils/pagination";
import { BookingPresentation } from "./BookingPresentation";

type BookingsProps = {
  searchParams: Promise<{ page: string }>;
};

export default async function Bookings({ searchParams }: BookingsProps) {
  const { page: pageParam } = await searchParams;
  const { page, limit, offset } = getPagination(pageParam);

  const [bookings, customers, hotels] = await Promise.all([
    getBookings(limit, offset),
    getCustomers(),
    getHotels(),
  ]);

  if (!bookings) return;

  return (
    <>
      <BookingPresentation
        bookings={bookings}
        customers={customers}
        hotels={hotels}
      />
      <Pagination
        rowsTotal={bookings.length}
        page={page}
        route="/bookings"
        limit={limit}
        scroll={true}
      />
    </>
  );
}
