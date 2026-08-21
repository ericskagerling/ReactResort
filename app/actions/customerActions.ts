"use server";

import { customerSchema } from "../types/Customer";
import { createCustomer } from "../lib/customerService";

export const createCustomerAction = async (formData: FormData) => {
  const customer = {
    firstName: formData.get("firstname"),
    lastName: formData.get("lastname"),
    email: formData.get("email"),
  };

  const result = customerSchema.safeParse(customer);

  if (!result.success) {
    throw new Error("Invalid customer");
  }

  // await createCustomer(result.data);
};
