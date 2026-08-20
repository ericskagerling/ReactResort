import { createCustomer, getCustomers } from "../lib/customerService";

const seedCustomer1 = {
  email: "travispastrana@redbull.com",
  firstName: "Travis",
  lastName: "Pastrana",
};

const seedCustomer2 = {
  email: "ryansheckler@redbull.com",
  firstName: "Ryan",
  lastName: "Sheckler",
};

const seedCustomer3 = {
  email: "marcmarquez@redbull.com",
  firstName: "Marc",
  lastName: "Marquez",
};

const seedCustomer4 = {
  email: "pedroacosta@redbull.com",
  firstName: "Pedro",
  lastName: "Acosta",
};

export async function seedCustomer() {
  const customers = await getCustomers();

  if (
    !customers.some((customer) => customer.data.email === seedCustomer1.email)
  ) {
    await createCustomer(seedCustomer1);
  }

  if (
    !customers.some((customer) => customer.data.email === seedCustomer2.email)
  ) {
    await createCustomer(seedCustomer2);
  }

  if (
    !customers.some((customer) => customer.data.email === seedCustomer3.email)
  ) {
    await createCustomer(seedCustomer3);
  }

  if (
    !customers.some((customer) => customer.data.email === seedCustomer4.email)
  ) {
    await createCustomer(seedCustomer4);
  }
}
