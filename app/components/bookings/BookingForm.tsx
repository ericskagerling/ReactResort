"use client";

import {
  BookingState,
  createBookingAction,
} from "@/app/actions/bookingActions";
import { useActionState } from "react";
import { CustomerResponse } from "@/app/types/CustomerResponse";
import { BookingStatePresentation } from "./BookingStatePresentation";

type BookingFormProps = {
  hotelId: string;
  customers: CustomerResponse[];
};

const initialState: BookingState = {
  success: false,
};

export const BookingForm = ({ hotelId, customers }: BookingFormProps) => {
  const [state, formAction] = useActionState(createBookingAction, initialState);

  return (
    <form
      action={formAction}
      className="p-20 flex-1 flex flex-col gap-5 border"
    >
      <input type="hidden" name="hotelId" value={hotelId} />
      <select
        name="customerId"
        defaultValue=""
        required
        className="px-1 border rounded-l-xl cursor-pointer"
      >
        <option value="" disabled>
          Select guest
        </option>
        {customers.map((c) => (
          <option key={c.id} value={c.id}>
            {c.data.firstName} {c.data.lastName}
          </option>
        ))}
      </select>
      <div className={`flex justify-between ${state.errors?.checkInDate && "text-red-300"}`}>
        <label>Checkin date:</label>
        <input
          type="date"
          name="checkInDate"
          required
          className="px-2 border rounded-l-xl cursor-text"
        />
      </div>
      <div className={`flex justify-between ${state.errors?.checkOutDate && "text-red-300"}`}>
        <label>Checkout date:</label>
        <input
          type="date"
          name="checkOutDate"
          required
          className="px-2 border rounded-l-xl cursor-text"
        />
      </div>
      <input
        type="number"
        name="guests"
        placeholder="Number of guests"
        required
        className="px-2 border rounded-l-xl cursor-text"
      />
      <button className="booking-button">Book</button>
      <div className="paragraph-bold text-center">
        <BookingStatePresentation state={state} />
      </div>
    </form>
  );
};
