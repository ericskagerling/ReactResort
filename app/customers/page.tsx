import { getCustomers } from "../lib/customerService";
import { CustomersPresentation } from "./CustomersPresentation";

export default async function Customers() {
  const customers = await getCustomers();

  return (
      <CustomersPresentation customers={customers} />
  );
}
