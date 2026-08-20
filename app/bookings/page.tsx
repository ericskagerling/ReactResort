import { Pagination } from "../components/Pagination";
import { getBookings } from "../lib/bookingsService";
import { getPagination } from "../utils/pagination";
import { BookingPresentation } from "./BookingPresentation";

type BookingsProps = {
  searchParams: Promise<{ page: string }>;
};

export default async function Bookings({ searchParams }: BookingsProps) {
  const { page: pageParam } = await searchParams;
  const { page, limit, offset } = getPagination(pageParam);

  const bookings = await getBookings(limit, offset);

  if (!bookings) return;

  return (
    <>
      <BookingPresentation bookings={bookings} />
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
