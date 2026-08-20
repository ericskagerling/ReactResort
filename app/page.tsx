import { Hero } from "./components/Hero";
import { HotelList } from "./components/hotels/HotelList";
import { getHotels } from "./lib/hotelService";
import { hotels } from "./data/hotels";
import { seed } from "./actions/seedHotel";

export default async function Home() {
  const hotels = await getHotels();
  // avkommentera raden ovan när api:t fungerar, och ta bort import { hotels } from "./data/hotels";
  seed();
  return (
    <>
      <Hero />
      <HotelList hotels={hotels} />
    </>
  );
}
