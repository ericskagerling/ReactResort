"use server";

import { Customer, customerSchema } from "../models/Customer";
// import { customerService } from "../services/customerService";

//gör ny fetch till nya API:t

export const createCustomer = async (formData: FormData) => {
  const customer = {
    firstName: formData.get("firstname"),
    lastName: formData.get("lastname"),
    email: formData.get("email"),
  };

  const result = customerSchema.safeParse(customer);

  if (!result.success)
    throw new Error("Invalid customer");

  // await customerService(result.data);
};
