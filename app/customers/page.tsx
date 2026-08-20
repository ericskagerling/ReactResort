import { Pagination } from "../components/Pagination";
import { getCustomers } from "../lib/customerService";
import { getPagination } from "../utils/pagination";
import { CustomersPresentation } from "./CustomersPresentation";

type CustomersProps = {
  searchParams: Promise<{ page: string }>;
};

export default async function Customers({ searchParams }: CustomersProps) {
  const { page: pageParam } = await searchParams;
  const { page, limit, offset } = getPagination(pageParam);

  const customers = await getCustomers(limit, offset);

  return (
    <>
      <CustomersPresentation customers={customers} />
      <Pagination
        rowsTotal={customers.length}
        page={page}
        route="customers"
        limit={limit}
        scroll={true}
      />
    </>
  );
}
