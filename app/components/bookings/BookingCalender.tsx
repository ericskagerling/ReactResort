"use client";
import { useState } from "react";

export const BookingCalender = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className="border p-10 flex flex-col gap-6">
      <h3 className="heading-three">Select Dates</h3>
      <div className="flex flex-col gap-2">
        <label className="paragraph-bold">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="..."
        />
      </div>
    </div>
  );
};
