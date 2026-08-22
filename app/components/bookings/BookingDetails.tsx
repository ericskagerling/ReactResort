"use client";

import { useState } from "react";
import { HotelResponse } from "@/app/types/HotelResponse";
type Props = { hotel: HotelResponse };

export const BookingDetails = ({ hotel }: Props) => {
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(1);

  return (
    <div className="border p-10 flex flex-col gap-6">
      <div>
        <h3 className="heading-three">{hotel.data.name}</h3>
        <p className="paragraph">{hotel.data.address}</p>
      </div>
      {/* guests selector */}
      {/* nights selector */}
      <button className="nav-button">Book</button>
    </div>
  );
};
