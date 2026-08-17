import { Hero } from "./components/Hero";
import { HotelList } from "./components/hotels/HotelList";
import { getHotels } from "./lib/api";
import { hotels } from "./data/hotels";
import Weather from "./components/weather/Weather";

export default async function Home() {
  const hotels = await getHotels();
  // avkommentera raden ovan när api:t fungerar, och ta bort import { hotels } from "./data/hotels";

  return (
    <>
      <Hero />
      <HotelList hotels={hotels} />
      <Weather />
    </>
  );
}
