"use client";

import { createBookingAction } from "@/app/actions/bookingActions";
import { useActionState } from "react";
import { CustomerResponse } from "@/app/types/CustomerResponse";

type BookingFormProps = {
  hotelId: string;
  customers: CustomerResponse[];
};

const initialState = {
  success: false,
  error: "",
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
        className="border cursor-pointer"
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
      ;
      <div className="flex justify-between">
        <label>Checkin date:</label>
        <input
          type="date"
          name="checkInDate"
          required
          className="px-1 border cursor-pointer"
        />
      </div>
      <div className="flex justify-between">
        <label>Checkout date:</label>
        <input
          type="date"
          name="checkOutDate"
          required
          className="px-1 border cursor-pointer"
        />
      </div>
      <input
        type="number"
        name="guests"
        placeholder="Number of guests"
        required
        className="px-1 border cursor-pointer"
      />
      <button className="nav-button">Book</button>
      <div className="paragraph-bold text-center">
        {state.error && <p className="text-red-500">{state.error}</p>}
        {state.success && (
          <p>
            You can relax, <span className="text-nav-button">hotel is booked!</span>
          </p>
        )}
      </div>
    </form>
  );
};
