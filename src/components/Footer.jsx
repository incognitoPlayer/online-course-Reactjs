import Logo from "./Logo";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";


const Footer = () => {
  return (
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
          <img src={facebook} className="mr-4 cursor-pointer" alt="facebook" />
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
  );
};

export default Footer;
