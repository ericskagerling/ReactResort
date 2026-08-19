import Weather from "./weather/Weather";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => (
  <footer className="p-5 border mt-5">
    <div className="flex justify-between">
      <Weather />
      <div>
        <p>React Resort </p>
        <div className="flex items-center gap-4">
          <a href="https://outlook.com" target="_blank">
            <MdEmail className="w-5 h-5" />
          </a>

          <a href="https://facebook.com" target="_blank">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
