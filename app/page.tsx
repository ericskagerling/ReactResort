import { Hero } from "./components/Hero";
import { HotelList } from "./components/hotels/HotelList";
import { Pagination } from "./components/Pagination";
import { getHotels } from "./lib/hotelService";
import { seed } from "./actions/seedHotel";
import { getPagination } from "./utils/pagination";
import { seedCustomer } from "./actions/seedCustomer";

type HomeProps = {
  searchParams: Promise<{ page: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { page: pageParam } = await searchParams;
  const { page, limit, offset } = getPagination(pageParam, 6);

  const hotels = await getHotels(limit, offset);

  if (!hotels) return;

  seed();
  seedCustomer();
  return (
    <>
      <Hero />
      <HotelList hotels={hotels} />
      <Pagination
        rowsTotal={hotels.length}
        page={page}
        route="/"
        limit={limit}
        scroll={false}
      />
    </>
  );
}
