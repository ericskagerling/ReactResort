import { createBookingAction } from "@/app/actions/bookingActions";
import { getCustomers } from "@/app/lib/customerService";

type BookingFormProps = {
  hotelId: string;
};

export const BookingForm = async ({ hotelId }: BookingFormProps) => {
  const customers = await getCustomers();
    console.log("hotelId prop:", hotelId);

  return (
    <form
      action={createBookingAction}
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
    </form>
  );
};
