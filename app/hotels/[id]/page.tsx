import { notFound } from "next/navigation";
import { hotels } from "@/app/data/hotels";

import { getHotelById } from "@/app/lib/hotelService";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function HotelDetailPage({ params }: Props) {
  const { id } = await params;
  // const hotel = hotels.find((h) => h.id === Number(id));
  const hotel = await getHotelById(id);

  if (!hotel) {
    notFound();
  }

  return (
    <section className="mt-10">
      <div className="h-[50vh] p-10 flex flex-col justify-between items-center border">
        <div className="text-center">
          <h3 className="heading-three">{hotel.data.name}</h3>
          <p className="paragraph">{hotel.data.address}</p>
        </div>
      </div>
    </section>
  );
}
