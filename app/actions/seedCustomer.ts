import { createCustomer, getCustomers } from "../lib/customerService";

const seedCustomer1 = {
  data: {
    email: "travispastrana@redbull.com",
    firstName: "Travis",
    lastName: "Pastrana",
  },
};

const seedCustomer2 = {
  data: {
    email: "ryansheckler@redbull.com",
    firstName: "Ryan",
    lastName: "Sheckler",
  },
};

const seedCustomer3 = {
  data: {
    email: "marcmarquez@redbull.com",
    firstName: "Marc",
    lastName: "Marquez",
  },
};

const seedCustomer4 = {
  data: {
    email: "pedroacosta@redbull.com",
    firstName: "Pedro",
    lastName: "Acosta",
  },
};

export async function seedCustomer() {
  const customers = await getCustomers();

  if (
    !customers.some(
      (customer) => customer.data.email === seedCustomer1.data.email,
    )
  ) {
    await createCustomer(seedCustomer1);
  }

  if (
    !customers.some(
      (customer) => customer.data.email === seedCustomer2.data.email,
    )
  ) {
    await createCustomer(seedCustomer2);
  }

  if (
    !customers.some(
      (customer) => customer.data.email === seedCustomer3.data.email,
    )
  ) {
    await createCustomer(seedCustomer3);
  }

  if (
    !customers.some(
      (customer) => customer.data.email === seedCustomer4.data.email,
    )
  ) {
    await createCustomer(seedCustomer4);
  }
}
