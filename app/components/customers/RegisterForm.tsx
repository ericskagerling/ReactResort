import { createCustomerAction } from "@/app/actions/customerActions";

export const RegisterForm = () =>
    <form action={createCustomerAction} className="flex flex-col gap-5">
        <input
          type="text"
          name="firstname"
          placeholder="Firstname"
          required
          className="pl-1 border"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          required
          className="pl-1 border"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className="pl-1 border"
        />
        <button className="nav-button">Register</button>
      </form>