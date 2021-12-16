import { Link } from "react-router-dom";
import bg from "../assets/background.png";
import Cards from "../components/Cards";
import InputForm from "../components/InputForm";
import Logo from "../components/Logo";

const ForgotPassword = () => {
  return (
    <div
      className="bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100vw 100vh",
        overflowY: "scroll",
      }}
    >
      <div className="container mx-auto mb-6">
        <div className="flex justify-center pt-10">
          <Logo />
        </div>
        <div className="max-w-xl mx-auto mt-1 pt-4">
          <Link to="/login" className="flex items-center font-medium mb-4">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back
          </Link>
        </div>
        <Cards
          title="Cari Akunmu"
          desc="Cari akunmu dengan nomer hp/emailmu yang sudah terdaftar untuk mereset kembali passwordmu"
        >
          <form className="max-w-lg mx-auto mt-5">
            <InputForm
              title="Masukan Phone Number HP/Email"
              desc="Masukan no hp atau email"
            />
            <div className="mt-3">
              <button className="bg-primaryColor hover:bg-[#f05d27] text-white py-2 px-4 rounded-full w-full text-base lg:text-sm font-medium">
                Cari Akun
              </button>
              <div className="mt-8 lg:mt-4 mx-auto text-center">
                <span className="2xl:text-sm lg:text-xs font-medium">
                  Tidak bisa menemukan akunmu?{" "}
                </span>
                <Link
                  to="/register"
                  className="2xl:text-sm lg:text-xs font-medium text-primaryColor underline"
                >
                  Menyerah saja dan buat akun baru
                </Link>
              </div>
            </div>
          </form>
        </Cards>
      </div>
    </div>
  );
};

export default ForgotPassword;
