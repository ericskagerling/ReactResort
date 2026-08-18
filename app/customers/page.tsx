import { getCustomers } from "../services/customerService";
import { CustomersPresentation } from "./CustomersPresentation";

export default async function Customers() {
  const customers = await getCustomers();

  return (
      <CustomersPresentation customers={customers} />
  );
}
