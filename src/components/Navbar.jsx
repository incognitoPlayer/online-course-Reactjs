import logo from "../assets/logos.svg";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center py-5 h-[104px] ">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-center items-center">
          <a className="px-10 py-4 text-base" href="#">
            Home
          </a>
          <a className="px-10 py-4 text-base" href="#">
            About Us
          </a>
          <a className="px-10 py-4 text-base " href="#">
            Contact Us
          </a>
        </div>
        <a
          className="border-2 border-brand text-brand px-8 py-2 rounded-full"
          href="#"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
