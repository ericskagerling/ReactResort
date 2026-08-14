import { FaRegUserCircle } from "react-icons/fa";
import { Logotype } from "../Logotype";

type HeaderProps = {
  openModal: () => void;
};

export const Header = ({ openModal }: HeaderProps) => (
  <header className="px-10 py-5 flex justify-between items-center border">
    <div className="w-20">
      <Logotype />
    </div>
    <nav>
      <button onClick={openModal} className="text-2xl cursor-pointer">
        <FaRegUserCircle />
      </button>
    </nav>
  </header>
);
