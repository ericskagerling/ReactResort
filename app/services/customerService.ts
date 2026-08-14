import { Customer } from "../models/Customer";

export const customerService = async (customer: Customer) => {
  try {
    const response = await fetch(
      "https://hotelapi-efatf0cfevcgb5gd.swedencentral-01.azurewebsites.net/customer/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      },
    );

    if (response.status >= 200) console.log(customer);

  } catch (err) {
    console.error(err);
  }
};
