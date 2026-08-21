import { Customer } from "../types/Customer";

const BASE_URL = "https://aspcode.net/api/db/HotelAPI/customers";

export const getCustomers = async (
  limit?: number,
  offset?: number,
): Promise<Customer[]> => {
  const response = await fetch(`${BASE_URL}`, {
    headers: {
      "X-API-KEY": process.env.HOTEL_API_KEY!,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch customers");

  const data = await response.json();

  return data;
};

//?limit=${limit}&offset=${offset}

export const createCustomer = async (customer: Customer) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "X-API-KEY": process.env.HOTEL_API_KEY!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to create customer: ${response.status} ${error}`);
  }
};
