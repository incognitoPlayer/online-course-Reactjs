import Logo from "./Logo";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import Pattern from "../assets/Pattern.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#182448] h-[466px] flex flex-col items-center justify-center relative">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2 className="text-[44px] font-semibold text-white">
            Dapatkan informasi terbaru dari kami
          </h2>
          <p className="text-base font-light text-white mt-3 w-1/2 text-center">
            Kami selalu menyediakan event menarik setiap minggunya, oleh karena
            itu dapatkan informasi lebih cepat agar kamu tidak ketinggalan event
            terbaru!
          </p>
          <div className="flex mt-[72px] w-[612px] gap-4">
            <input
              type="text"
              className="bg-[#2C385B] border rounded-full px-4 w-4/5 text-colorParagraph focus:outline-none focus:shadow-outline focus:border-primaryColor border-[#2C385B] focus:ring-0"
              placeholder="Enter Your Email Here"
            />
            <button className="text-white w-1/5 bg-primaryColor inline-block lg:text-sm lg:px-8 lg:py-2 2xl:px-[40px] 2xl:py-[18px] rounded-full">
              Send
            </button>
          </div>
        </div>
        <img src={Pattern} alt="patern" className="absolute bottom-0 right-0" />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mt-6">
          <Logo />
          <div className="flex justify-center items-center">
            <a
              className="px-10 py-4 2xl:text-base lg:text-sm font-medium text-colorHeading"
              href="/"
            >
              Terms and conditions
            </a>
            <a
              className="px-10 py-4 2xl:text-base lg:text-sm font-medium text-colorHeading"
              href="/"
            >
              Privacy Policy
            </a>
            <a
              className="px-10 py-4 2xl:text-base lg:text-sm font-medium text-colorHeading "
              href="/"
            >
              Copyright
            </a>
            <a
              className="pl-10 py-4 2xl:text-base lg:text-sm font-medium text-colorHeading "
              href="/"
            >
              Cookie policy
            </a>
          </div>
        </div>
        <div className="flex justify-between text-sm items-center mt-[100px] mb-5">
          <p>Copyright © 2021 Tokoh Muda Indonesia. All rights reserved.</p>
          <div className="flex">
            <img
              src={facebook}
              className="mr-4 cursor-pointer"
              alt="facebook"
            />
            <img
              src={instagram}
              className="mr-4 cursor-pointer"
              alt="instagram"
            />
            <img src={twitter} className="mr-4 cursor-pointer" alt="twitter" />
            <img src={linkedin} className=" cursor-pointer" alt="linkedin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
