"use client";

import { useCallback, useState } from "react";
import Location from "./Location";
import LocationName from "./LocationName";
import WeatherInfo from "./WeatherInfo";

type LocationData = {
  latitude: number;
  longitude: number;
};

export default function Weather() {
  const [location, setLocation] = useState<LocationData | null>(null);

  const handleLocation = useCallback((latitude: number, longitude: number) => {
    setLocation({
      latitude,
      longitude,
    });
  }, []);

  return (
    <>
      <div>
        <Location onLocation={handleLocation} />

        {location && (
          <div>
            <LocationName
              latitude={location.latitude}
              longitude={location.longitude}
            />

            <WeatherInfo
              latitude={location.latitude}
              longitude={location.longitude}
            />
          </div>
        )}
      </div>
    </>
  );
}
