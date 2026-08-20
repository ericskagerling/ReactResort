import { getHotels } from "@/app/lib/hotelService";
import { BookingCalender } from "@/app/components/bookings/BookingCalender";
import { BookingDetails } from "@/app/components/bookings/BookingDetails";
type Props = {
  params: Promise<{ id: string }>;
};

export default async function HotelDetailPage({ params }: Props) {
  const { id } = await params;
  const hotels = await getHotels();

  const hotel = hotels.find((h) => String(h.id) === id);

  if (!hotel) {
    return <>Hotel not found</>;
  }

  return (
    <section className="mt-10">
      <div className="h-[50vh] p-10 flex flex-col justify-between items-center border">
        <div className="text-center">
          <h3 className="heading-three">{hotel.data.name}</h3>
          <p className="paragraph">{hotel.data.address}</p>
        </div>
      </div>
      <BookingCalender />
      <BookingDetails hotel={hotel} />
    </section>
  );
}
