"use client";

import { useState } from "react";
import { Hotel } from "../../types/Hotel";
import { HotelCard } from "./HotelCard";
import { Pagination } from "../Pagination";

type Props = {
  hotels: Hotel[];
};

const ITEMS_PER_PAGE = 6;

export const HotelList = ({ hotels }: Props) => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const visibleHotels = hotels.slice(start, start + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(hotels.length / ITEMS_PER_PAGE);

  return (
    <section id="hotels" className="mt-10">
      <h2 className="p-5 heading-two text-center">Our Hotels</h2>
      <div className="grid grid-cols-3">
        {visibleHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </section>
  );
};
