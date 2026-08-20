export type Booking = {
  data: {
    checkInDate: string;
    checkOutDate: string;
    hotelId: number;
    customerId: string;
    guests: number;
  };
  id: number;
};
