import { Hotel } from "../../types";
import { HotelCard } from "./HotelCard";

type Props = {
  hotels: Hotel[];
};

export const HotelList = ({ hotels }: Props) => (
  <section className="w-full p-8">
    <h2>Our Hotels</h2>
    <div className="grid grid-cols-1 gap-4 mt-4">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  </section>
);
