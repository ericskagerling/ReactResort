import { createHotel, getHotels } from "../lib/hotelService";
const seedHotel = {
  name: "Red bull Mansion",
  address: "Dryckgatan 21, Stockholm",
};

export async function seed() {
  const hotels = await getHotels();

  const hotelExists = hotels.some((hotel) => {
    return hotel.data.name === seedHotel.name;
  });
  if (hotelExists) {
    return;
  }

  await createHotel(seedHotel.name, seedHotel.address);
}
