import { BookingState } from "@/app/actions/bookingActions";
import { FaPoo, FaPooStorm } from "react-icons/fa";

type FieldErrorProps = {
  error?: string;
};

type BookingStatePresentationProps = {
  state: BookingState;
};

const FieldError = ({ error }: FieldErrorProps) => {
  if (!error) return null;

  return (
    <div className="px-10 py-5 flex justify-center gap-5 text-red-300 items-center border rounded-xl">
      <p>{error}</p>
      <FaPoo className="text-4xl" />
    </div>
  );
};

export const BookingStatePresentation = ({
  state,
}: BookingStatePresentationProps) => (
  <>
    <FieldError error={state.errors?.checkInDate?.[0]} />
    <br />
    <FieldError error={state.errors?.checkOutDate?.[0]} />
    <FieldError error={state.error} />
    {state.success && (
      <p>
        You can relax, <span className="text-nav-button">hotel is booked!</span>
      </p>
    )}
  </>
);
