import Navbar from "../components/Navbar";
import bg from "../assets/background.png";
import mhs from "../assets/mhs.svg";

const LandingPage = () => {
  return (
    <div
      className="bg-no-repeat bg-center h-screen"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "100vw 100vh" }}
    >
      <Navbar />
      <div className="container mx-auto flex mt-[60px]">
        <div className="flex-1">
          <h1
            className="text-[70px] font-medium text-title"
            style={{ lineHeight: 1.2 }}
          >
            Komunitas <span className="text-sub">Belajar</span> Bagi Pemuda dan
            Mahasiswa <span className="text-brand">Indonesia</span>
          </h1>
          <p className="mt-4 mb-5 text-lg">
            Kami membantu meningkatkan self-development anda untuk mengurangi
            jumlah pengangguran pemuda di indonesia. Ayok bergabung bersama kami
            agar anda tidak menganggur lagi.
          </p>
          <a
            className=" text-white bg-brand inline-block px-[48px] py-[19px] rounded-full"
            href="#"
          >
            Daftar Disini
          </a>
          <div className="flex mt-[30px]">
            <div className="flex-1">
              <h3 className="text-[40px] font-semibold text-brand2">10K+</h3>
              <p className="text-base">Member Count</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[40px] font-semibold text-brand2">200+</h3>
              <p className="text-base">Universities</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[40px] font-semibold text-brand2">120+</h3>
              <p className="text-base">Practice Kit</p>
            </div>
            <div className="flex-1">
              <h3 className="text-[40px] font-semibold text-brand2">130+</h3>
              <p className="text-base">Challenges</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img className="mt-[100px] pl-6" src={mhs} alt="mahasiswa" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
