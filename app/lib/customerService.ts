import { Customer } from "../types/Customer";

const BASE_URL = "https://aspcode.net/api/db/HotelAPI/customers";

export const getCustomers = async (limit: number, offset: number) => {
  try {
    const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`,
      {
        headers: {
          "X-API-KEY": process.env.HOTEL_API_KEY!,
        },
      },
    );

    if (!response.ok) throw new Error("Failed to fetch customers");

    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export const createCustomer = async (customer: Customer) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    if (!response.ok) throw new Error("Failed to create customer");
  } catch (err) {
    console.error(err);
  }
};
