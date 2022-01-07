import { Link } from "react-router-dom";
import Logo from "./Logo";
import avatar from "../assets/avatar.svg";
import mail from "../assets/mail.svg";
import notif from "../assets/notif.svg";

const Navbar = ({ profile }) => {
  return (
    <div
      className={` ${
        profile ? "bg-white" : ""
      } container mx-auto flex justify-between items-center py-5 h-[104px] lg:h-[80px]`}
    >
      <Logo />
      {profile ? (
        <>
          <div className="flex justify-center items-center ">
            <Link
              className="px-10 py-4 text-base lg:text-sm font-medium text-colorHeading"
              to="/dashboard"
            >
              My Dashboard
            </Link>
            <div className="px-10 group inline-block relative">
              <Link
                to="/"
                className=" py-4 text-base lg:text-sm text-colorParagraph inline-flex items-center"
              >
                Productivity
                <svg
                  className="fill-current h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </Link>
              <ul className="absolute hidden text-colorParagraph pt-1 group-hover:block">
                <li className="">
                  <Link
                    className="rounded-t lg:text-sm hover:text-[#00004A] bg-white hover:bg-[#FEF7EC] py-2 px-4 block whitespace-no-wrap"
                    to="/practice"
                  >
                    Practice
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="bg-white lg:text-sm hover:text-[#00004A] hover:bg-[#FEF7EC] py-2 px-4 block whitespace-no-wrap"
                    to="/"
                  >
                    Challenge
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="rounded-b lg:text-sm hover:text-[#00004A] bg-white hover:bg-[#FEF7EC] py-2 px-4 block whitespace-no-wrap"
                    to="/events"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <a
              className="px-10 py-4 text-base lg:text-sm text-colorParagraph "
              href="/"
            >
              Leaderboard
            </a>
          </div>
          <div className="flex items-center w-1/5 justify-between">
            <img src={mail} className="pr-[10px]" alt="mail" />
            <img src={notif} className="pr-[10px]" alt="mail" />
            <img src={avatar} className="w-[35px]" alt="avatar" />
            <p>Adam Smith</p>
            <svg
              className="fill-current h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <a
              className="px-10 py-4 2xl:text-base lg:text-sm font-medium text-colorHeading"
              href="/"
            >
              Home
            </a>
            <a
              className="px-10 py-4 2xl:text-base lg:text-sm text-colorParagraph"
              href="/"
            >
              About Us
            </a>
            <a
              className="px-10 py-4 2xl:text-base lg:text-sm text-colorParagraph "
              href="/"
            >
              Contact Us
            </a>
          </div>
          <Link
            className="border-2 border-primaryColor text-primaryColor 2xl:text-base lg:text-sm px-8 py-2 rounded-full"
            to="/login"
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
