import Image from "next/image";
import { Hero } from "./components/Hero";
import WeatherInfo from "./components/WeatherInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <WeatherInfo />
    </>
  );
}
