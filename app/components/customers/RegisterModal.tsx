import { createCustomer } from "@/app/actions/customerActions";
import { MdOutlineCancel } from "react-icons/md";

type CustomerFormProps = {
  open: boolean;
  onClose: () => void;
};

export const RegisterModal = ({ open, onClose }: CustomerFormProps) => {
  if (!open) return null;

  return (
    <div className="bg-background border absolute right-0">
      <button onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
        <MdOutlineCancel className="text-2xl"/>
      </button>
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
    </div>
  );
};
