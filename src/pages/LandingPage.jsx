import Navbar from "../components/Navbar";
import bg from "../assets/background.png";
import mhs from "../assets/mhs.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100vw 100vh",
        overflowY: "scroll",
      }}
    >
      <Navbar />
      <div className="container mx-auto flex mt-[60px] lg:mt-[30px]">
        <div className="flex-1">
          <h1
            className="lg:text-[55px] 2xl:text-[56px] text-colorHeading font-medium text-title"
            style={{ lineHeight: 1.2 }}
          >
            Komunitas <span className="text-tertiaryColor">Belajar</span> Bagi
            Pemuda dan Mahasiswa{" "}
            <span className="text-primaryColor">Indonesia</span>
          </h1>
          <p className="mt-4 mb-5 lg:mb-4 lg:mt-2 text-lg lg:text-sm 2xl:text-base text-colorParagraph ">
            Kami membantu meningkatkan self-development anda untuk mengurangi
            jumlah pengangguran pemuda di indonesia. Ayok bergabung bersama kami
            agar anda tidak menganggur lagi.
          </p>
          <Link
            className=" text-white bg-primaryColor inline-block lg:text-sm lg:px-8 lg:py-2 px-[48px] py-[19px] rounded-full"
            to="/register"
          >
            Daftar Disini
          </Link>
          <div className="flex mt-[30px] lg:mt-[20px]">
            <div className="flex-1">
              <h3 className="text-[40px] lg:text-3xl font-semibold text-secondaryColor">
                10K+
              </h3>
              <p className="text-base lg:text-sm">Member Count</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[40px] lg:text-3xl font-semibold text-secondaryColor">
                200+
              </h3>
              <p className="text-base lg:text-sm">Universities</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[40px] lg:text-3xl font-semibold text-secondaryColor">
                120+
              </h3>
              <p className="text-base lg:text-sm">Practice Kit</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[40px] lg:text-3xl font-semibold text-secondaryColor">
                130+
              </h3>
              <p className="text-base lg:text-sm">Challenges</p>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <img
            className="mt-[100px] lg:mt-1  pl-1"
            src={mhs}
            height="100%"
            alt="mahasiswa"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
