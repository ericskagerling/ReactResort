export type Hotel = {
  id: string;
  createdAt: string;
  updatedAt: string;
  database: string;
  resource: string;
  data: {
    id?: string | number;
    name?: string;
    address?: string;
    hotelName?: string;
    hotelAddress?: string;
    bookingCount?: number;
  };
};
