import { HotelResponse } from "@/app/types/HotelResponse";
import { Hotel } from "../../types/Hotel";
import { HotelCard } from "./HotelCard";

type Props = {
  hotels: HotelResponse[];
};

export const HotelList = async ({ hotels }: Props) => {

  return (
    <section id="hotels" className="mt-10">
      <h2 className="p-5 heading-two text-center">Our Hotels</h2>
      <div className="grid grid-cols-3">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
};
