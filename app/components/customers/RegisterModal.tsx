import { MdOutlineCancel } from "react-icons/md";
import { RegisterForm } from "./RegisterForm";

type CustomerFormProps = {
  open: boolean;
  onClose: () => void;
};

export const RegisterModal = ({ open, onClose }: CustomerFormProps) => {
  if (!open) return null;

  return (
    <div className="bg-background border absolute right-0">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <MdOutlineCancel className="text-2xl" />
      </button>
      <RegisterForm />
    </div>
  );
};
