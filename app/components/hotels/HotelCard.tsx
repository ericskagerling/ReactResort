import Link from "next/link";
import { Hotel } from "../../types";

type Props = {
  hotel: Hotel;
};

export const HotelCard = ({ hotel }: Props) => (
  <div className="h-[50vh] p-10 flex flex-col justify-between items-center border">
    <div className="text-center">
      <h3 className="heading-three">{hotel.name}</h3>
      <p className="paragraph">{hotel.address}</p>
    </div>
    {/*     <button className="nav-button button-text">Book</button> */}
    <Link href={`/hotels/${hotel.id}`} className="nav-button button-text">
      Book
    </Link>
  </div>
);
