import Link from "next/link";
import { Hotel } from "../../types/Hotel";

type Props = {
  hotel: Hotel;
};

export const HotelCard = ({ hotel }: Props) => (
  <div className="h-[50vh] p-10 flex flex-col justify-between items-center border">
    <div className="text-center">
      <h3 className="heading-three">{hotel.data.name}</h3>
      <p className="paragraph">{hotel.data.address}</p>
    </div>
    {/*     <button className="nav-button button-text">Book</button> */}
    <Link href={`/hotels/${hotel.id}`} className="nav-button">
      Book
    </Link>
  </div>
);
