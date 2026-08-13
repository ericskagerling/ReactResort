import Image from "next/image";
import { Hero } from "./components/Hero";
import { HotelList } from "./components/hotels/HotelList";
import { getHotels } from "./lib/api";

export default async function Home() {
  const hotels = await getHotels();

  return (
    <>
      <Hero />
      <HotelList hotels={hotels} />
    </>
  );
}
