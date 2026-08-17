import { createCustomer } from "@/app/actions/customerActions";

export const RegisterForm = () =>
    <form action={createCustomer} className="p-20 flex flex-col gap-5">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          className="pl-1 border"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          className="pl-1 border"
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          className="pl-1 border"
        />
        <button className="nav-button button-text">Register</button>
      </form>