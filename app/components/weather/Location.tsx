"use client";

import { useEffect } from "react";

type LocationProps = {
  onLocation: (latitude: number, longitude: number) => void;
};

export default function Location({ onLocation }: LocationProps) {
  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        onLocation(latitude, longitude);
      },
      (error) => {
        alert("Unable to retrieve your location");
      },
    );
  }, [onLocation]);
  return null;
}
