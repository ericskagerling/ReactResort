"use client";

import { useEffect, useState } from "react";

type LocationNameProps = {
  latitude: number;
  longitude: number;
};

export default function LocationName({
  latitude,
  longitude,
}: LocationNameProps) {
  const [locationName, setLocationName] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocationName = async () => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
      );

      const data = await response.json();
      const city =
        data.address.city || data.address.town || data.address.village;
      setLocationName(city ?? "Unknown Location");
    };

    fetchLocationName();
  }, [latitude, longitude]);

  return (
    <>
      <div>
        <p className="info-text">Current weather in</p>
        <h2 className="paragraph">
          {locationName ?? "Retrieving location..."}
        </h2>
      </div>
    </>
  );
}
