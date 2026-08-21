import { getBookings } from "../lib/bookingsService";

const seedBooking1 = {
  checkInDate: "2026-10-15",
  checkOutDate: "2026-10-17",
  //Hur hämtar vi hotel id?
  hotelId: 0,
  //Hur hämtar vi customer id?
  customerId: 0,
  guests: 2,
};

const seedBooking2 = {
  checkInDate: "2026-10-15",
  checkOutDate: "2026-10-17",
  hotelId: 0,
  customerId: 0,
  guests: 3,
};

const seedBooking3 = {
  checkInDate: "2026-10-18",
  checkOutDate: "2026-10-19",
  hotelId: 0,
  customerId: 0,
  guests: 1,
};

const seedBooking4 = {
  checkInDate: "2026-10-20",
  checkOutDate: "2026-10-24",
  hotelId: 0,
  customerId: 0,
  guests: 5,
};

export async function seedBooking() {
  await getBookings();
  //Behövs parametrarna (limit: number, offset: number)
}
