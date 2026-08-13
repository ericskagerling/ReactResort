import { Hotel } from "../../types";

type Props = {
  hotel: Hotel;
};

export const HotelCard = ({ hotel }: Props) => (
  <div className="border p-4">
    <h3>{hotel.name}</h3>
    <p>{hotel.address}</p>
  </div>
);
