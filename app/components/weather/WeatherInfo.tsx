"use client";
import { useEffect, useState } from "react";
import {
  Sun,
  CloudSun,
  Cloud,
  Umbrella,
  Snowflake,
  CloudRain,
  Zap,
} from "lucide-react";
//Detta är vad vi får tillbaka från API:et, det används för att typa vårt state
type WeatherData = {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
};

type WeatherInfoProps = {
  latitude: number;
  longitude: number;
};

// Funktion som tar emot en väder-kod och returnerar beskrivning av vädret
// const weatherCodeDescription = (code: number) => {
//   if (code === 0) return "Clear sky ☀";
//   if (code === 1) return "Mainly clear 🌤️";
//   if (code === 2) return "Partly cloudy ☀";
//   if (code === 3) return "Overcast ☁️";
//   if (code === 61 || code === 63 || code === 65) return "Rain 🌧️";
//   if (code === 71 || code === 73 || code === 75) return "Snow fall ❄️";
//   if (code === 80 || code === 81 || code === 82) return "Rain showers 🌦️";
//   if (code === 95) return "Thunderstorm ⛈️";
//   return "Unknown weather code";
// };
const weatherCodeDescription = (code: number) => {
  const iconClass =
    "inline-block h-5 w-5 ml-1  relative top-[-4px]  stroke-[1]";

  if (code === 0)
    return (
      <>
        Clear sky <Sun className={iconClass} />
      </>
    );

  if (code === 1)
    return (
      <>
        Mainly clear <Sun className={iconClass} />
      </>
    );

  if (code === 2)
    return (
      <>
        Partly cloudy <CloudSun className={iconClass} />
      </>
    );

  if (code === 3)
    return (
      <>
        Overcast <Cloud className={iconClass} />{" "}
      </>
    );

  if (code === 61 || code === 63 || code === 65)
    return (
      <>
        Rain <Umbrella className={iconClass} />{" "}
      </>
    );

  if (code === 71 || code === 73 || code === 75)
    return (
      <>
        Snow fall <Snowflake className={iconClass} />{" "}
      </>
    );

  if (code === 80 || code === 81 || code === 82)
    return (
      <>
        Rain showers <CloudRain className={iconClass} />{" "}
      </>
    );

  if (code === 95)
    return (
      <>
        Thunderstorm <Zap className={iconClass} />{" "}
      </>
    );

  return "Unknown weather code";
};

// Komponent som hämtar och visar väderdata för en specifik plats
export default function WeatherInfo({ latitude, longitude }: WeatherInfoProps) {
  // State för att lagra väderdata som hämtas från API:et
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  // useEffect används för att hämta väderdata
  useEffect(() => {
    const fetchWeatherData = async () => {
      // Hämtar väderdata från Open-Meteo API:et
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`,
      );
      const data = await response.json();
      setWeatherData(data);
    };
    fetchWeatherData();
  }, [latitude, longitude]);

  return (
    <>
      <div>
        {weatherData && (
          <div>
            <p className="paragraph">{weatherData.current.temperature_2m}°C</p>
            <p className="info-text">
              {weatherCodeDescription(weatherData.current.weather_code)}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
