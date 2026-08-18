import { Customer } from "../models/Customer";

type CustomersPresentationProps = {
  customers: Customer[];
};

export const CustomersPresentation = ({
  customers,
}: CustomersPresentationProps) => (
  <section className="p-10">
    <h2 className="heading-two mb-10 text-center">Customers</h2>
    {customers.map((c) => (
      <div
        key={c.id}
        className="my-5 px-10 py-5 grid grid-cols-6 items-center border"
      >
        <div>
          <p className="paragraph-sm">Firstname:</p>
          <p className="paragraph">{c.data.firstName}</p>
        </div>
        <div>
          <p className="paragraph-sm">Lastname:</p>
          <p>{c.data.lastName}</p>
        </div>
        <div>
          <p className="paragraph-sm">E-mail:</p>
          <p>{c.data.email}</p>
        </div>
      </div>
    ))}
  </section>
);
