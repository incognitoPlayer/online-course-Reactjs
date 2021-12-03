import { Link, } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center py-5 h-[104px]">
      <Logo />
      <div className="flex justify-center items-center">
        < a className="px-10 py-4 text-base font-medium text-colorHeading" href="/" >
          Home
        </a >
        <a className="px-10 py-4 text-base text-colorParagraph" href="/">
          About Us
        </a>
        <a className="px-10 py-4 text-base text-colorParagraph " href="/">
          Contact Us
        </a>
      </div >
      <Link
        className="border-2 border-primaryColor text-primaryColor px-8 py-2 rounded-full"
        to="/login"
      >
        Login
      </Link>
    </div >
  );
};

export default Navbar;