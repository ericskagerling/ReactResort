import { Hero } from "./components/Hero";
import { HotelList } from "./components/hotels/HotelList";
import { getHotels } from "./lib/api";
import WeatherInfo from "./components/weather/WeatherInfo";

export default async function Home() {
  const hotels = await getHotels();

  return (
    <>
      <Hero />
      <HotelList hotels={hotels} />
      <WeatherInfo />
    </>
  );
}
