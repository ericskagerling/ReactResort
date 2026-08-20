"use client";

import { useState } from "react";
import { Pagination } from "../components/Pagination";
import { Booking } from "../types/Booking";
import { Customer } from "../types/Customer";
import { Hotel } from "../types/Hotel";

type BookingPresentationProps = {
  bookings: Booking[];
  customers: Customer[];
  hotels: Hotel[];
};

//PAGINATION behöver ändras utifrån nya API:t
// const ITEMS_PER_PAGE = 10;

export const BookingPresentation = ({ bookings, customers, hotels }: BookingPresentationProps) => {
  // const [page, setPage] = useState(1);
  
  // const start = (page - 1) * ITEMS_PER_PAGE;
  // const visibleHotels = bookings.slice(start, start + ITEMS_PER_PAGE);
  
  // const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE);
  
  return (
    <section className="p-10">
      <h2 className="heading-two mb-10 text-center">Bookings</h2>
      {bookings.map((b) => {
      const hotel = hotels.find(h => h.id === b.data.hotelId);
      const customer = customers.find(c => c.id === b.data.customerId);
      return (
        <div
          key={b.id}
          className="my-5 px-10 py-5 grid grid-cols-5 items-center border"
        >
          <p className="paragraph-bold">{hotel?.data.name}</p>
          <div>
            <p className="paragraph-sm">Customer:</p>
            <p className="paragraph">{customer?.data.firstName} {customer?.data.lastName}</p>
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
      )
      })}
      {/* <Pagination page={page} totalPages={totalPages} onPageChange={setPage} /> */}
    </section>
  );
};
