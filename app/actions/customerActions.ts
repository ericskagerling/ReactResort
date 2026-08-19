"use server";

import { customerSchema } from "../types/Customer";
import { createCustomer } from "../lib/customerService";

export const createCustomerAction = async (formData: FormData) => {
  //om vi vill seeda hårdkodade objekt behövs följande två rader:
  // const customers = await getCustomers();
  // if (!customers || customers.length >= 4) return;

  const customer = {
    firstName: formData.get("firstname"),
    lastName: formData.get("lastname"),
    email: formData.get("email"),
  };

  const result = customerSchema.safeParse(customer);

  if (!result.success) {
    throw new Error("Invalid customer");
  }

  await createCustomer(result.data);
};
