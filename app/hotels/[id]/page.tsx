import { notFound } from "next/navigation";
// import { hotels } from "@/app/data/hotels";
import { getHotelById } from "../../lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function HotelDetailPage({ params }: Props) {
  const { id } = await params;
  let hotel;
  try {
    hotel = await getHotelById(id);
  } catch {
    notFound();
  }
  // const hotel = await getHotelById(id);

  if (!hotel) {
    notFound();
  }

  /*   const name = hotel.data.name ?? hotel.data.hotelName ?? "Unnamed Hotel";
  const address =
    hotel.data.address ?? hotel.data.address ?? "No address provided"; */

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
