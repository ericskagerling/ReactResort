"use client";
import { useEffect, useState } from "react";

//Detta är vad vi får tillbaka från API:et, det används för att typa vårt state
type WeatherData = {
  current: {
    temperature_2m: number;
    weathercode: number;
  };
};

// Funktion som tar emot en väder-kod och returnerar beskrivning av vädret
const weatherCodeDescription = (code: number) => {
  if (code === 0) return "☀️ Clear sky";
  if (code === 1) return "🌤️ Mainly clear";
  if (code === 2) return "⛅ Partly cloudy";
  if (code === 3) return "☁️ Overcast";
  if (code === 61 || code === 63 || code === 65) return "🌧️ Rain";
  if (code === 71 || code === 73 || code === 75) return "❄️ Snow fall";
  if (code === 80 || code === 81 || code === 82) return "🌦️ Rain showers";
  if (code === 95) return "⛈️ Thunderstorm";
  return "Unknown weather code";
};

// Komponent som hämtar och visar väderdata för en specifik plats
export default function WeatherInfo() {
  //Detta är hårdkodat för att visa vädret i Stockholm
  const location = "Stockholm";

  // State för att lagra väderdata som hämtas från API:et
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  // Funktion som hämtar koordinater för en plats från Open-Meteo API:et
  const fetchCoordinates = async () => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`,
    );

    const data = await response.json();

    console.log(data);
  };

  // useEffect används för att hämta väderdata
  useEffect(() => {
    const fetchWeatherData = async () => {
      // Hårdkodade koordinater för Stockholm
      const latitude = 59.3293;
      const longitude = 18.0686;

      // Hämtar väderdata från Open-Meteo API:et
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode`,
      );
      const data = await response.json();
      setWeatherData(data);
    };
    fetchWeatherData();
    fetchCoordinates();
    // Tom array som andra argument till useEffect gör att effekten bara körs en gång när komponenten mountas
  }, []);

  return (
    <>
      <div>
        <h2>{location}</h2>
        {weatherData && (
          <div>
            <p>{weatherData.current.temperature_2m}°C</p>
            <p>{weatherCodeDescription(weatherData.current.weathercode)}</p>
          </div>
        )}
      </div>
    </>
  );
}
