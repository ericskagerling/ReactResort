import { FaRegUserCircle } from "react-icons/fa";
import { Logotype } from "./Logotype";
import Link from "next/link";

type HeaderProps = {
  openModal: () => void;
};

export const Header = ({ openModal }: HeaderProps) => (
  <header className="h-25 px-10 flex justify-between items-center border">
    <Link href="/" className="w-20 hover:scale-105 transition-transform duration-300">
      <Logotype />
    </Link>
    <nav className="flex gap-10">
      <Link href="/bookings" className="nav-button">Bookings</Link>
      <button onClick={openModal} className="text-2xl cursor-pointer hover:scale-110 transition-transform duration-300">
        <FaRegUserCircle />
      </button>
    </nav>
  </header>
);
