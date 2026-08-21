import { createBooking, getBookings } from "../lib/bookingsService";

const seedBooking1 = {
  checkInDate: "2026-10-15",
  checkOutDate: "2026-10-17",
  hotelId: "39f0e7db-4fb6-4e2a-a829-e6a3bd0f81f2",
  customerId: "3d5e4bf5-9a63-4aa6-9d95-11731151a0fb",
  guests: 2,
};

const seedBooking2 = {
  checkInDate: "2026-10-15",
  checkOutDate: "2026-10-17",
  hotelId: "10e98f10-a1b1-4cf7-aeb2-d9b879ddac86",
  customerId: "2949bf4d-49e1-4f7d-8c68-6d0d328298f4",
  guests: 3,
};

const seedBooking3 = {
  checkInDate: "2026-10-18",
  checkOutDate: "2026-10-19",
  hotelId: "39f0e7db-4fb6-4e2a-a829-e6a3bd0f81f2",
  customerId: "54a792e2-d0f0-4975-9106-9c635efa0a69",
  guests: 1,
};

const seedBooking4 = {
  checkInDate: "2026-10-20",
  checkOutDate: "2026-10-24",
  hotelId: "10e98f10-a1b1-4cf7-aeb2-d9b879ddac86",
  customerId: "b190a10b-fe01-4264-8f71-1b93a027ff24",
  guests: 5,
};

export async function seedBooking() {
  const bookings = await getBookings();

  if (
    !bookings.some(
      (booking) => booking.data.customerId === seedBooking1.customerId,
    )
  ) {
    await createBooking(seedBooking1);
  }

  if (
    !bookings.some(
      (booking) => booking.data.customerId === seedBooking2.customerId,
    )
  ) {
    await createBooking(seedBooking2);
  }

  if (
    !bookings.some(
      (booking) => booking.data.customerId === seedBooking3.customerId,
    )
  ) {
    await createBooking(seedBooking3);
  }

  if (
    !bookings.some(
      (booking) => booking.data.customerId === seedBooking4.customerId,
    )
  ) {
    await createBooking(seedBooking4);
  }
}
