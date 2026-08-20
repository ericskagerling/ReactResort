import { createHotel, getHotels } from "../lib/hotelService";
const seedHotel = {
  name: "Red bull Mansion",
  address: "Dryckgatan 21, Stockholm",
};

export async function seed() {
  const hotels = await getHotels();

  if (!hotels.some((hotel) => hotel.data.name === seedHotel.name)) {
    await createHotel(seedHotel.name, seedHotel.address);
  }
}
