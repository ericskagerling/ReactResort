import { Pagination } from "../components/Pagination";
import { Booking } from "../types/Booking";

type BookingPresentationProps = {
  bookings: Booking[];
};

export const BookingPresentation = ({ bookings }: BookingPresentationProps) => {

  return (
    <section className="px-10 pt-10">
      <h2 className="heading-two mb-10 text-center">Bookings</h2>
      {bookings.map((b) => (
        <div
          key={b.id}
          className="px-10 py-5 grid grid-cols-5 items-center border"
        >
          <p className="paragraph-bold">{b.data.hotelId}</p>
          <div>
            <p className="paragraph-sm">Customer:</p>
            <p className="paragraph">{b.data.customerId}</p>
          </div>
          <div>
            <p className="paragraph-sm">Guests:</p>
            <p>{b.data.guests}</p>
          </div>
          <div>
            <p className="paragraph-sm">Check in date:</p>
            <p>{b.data.checkInDate}</p>
          </div>
          <div>
            <p className="paragraph-sm">Check out date:</p>
            <p>{b.data.checkOutDate}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
