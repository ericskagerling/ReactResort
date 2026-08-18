import { createCustomerAction } from "@/app/actions/customerActions";

export const RegisterForm = () =>
    <form action={createCustomerAction} className="flex flex-col gap-5">
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
        <button className="nav-button">Register</button>
      </form>