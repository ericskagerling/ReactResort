import { MdOutlineCancel } from "react-icons/md";
import { RegisterForm } from "./RegisterForm";
import Link from "next/link";

type CustomerModalProps = {
  open: boolean;
  onClose: () => void;
};

export const CustomerModal = ({ open, onClose }: CustomerModalProps) => {
  if (!open) return null;

  return (
    <article className="p-20 flex flex-col justify-center gap-20 bg-background border absolute right-0">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <MdOutlineCancel className="text-2xl hover:scale-110 transition-transform duration-300" />
      </button>
      <RegisterForm />
      <Link href="/customers" className="nav-button">Customers</Link>
    </article>
  );
};
