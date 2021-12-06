import { Link } from "react-router-dom";
import bg from "../assets/background.png";
import Cards from "../components/Cards";
import InputOtp from "../components/InputOtp";
import Logo from "../components/Logo";

const VerifyForgotPassword = () => {
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
          <Link to="/login" className="flex items-center font-medium">
            <svg
              class="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back
          </Link>
        </div>
        <Cards
          title="Cek Handphone kamu!"
          desc="Kami sudah menemukan akunmu dan kami sudah mengirimkan kode ke nomer di bawah ini"
        >
          <form className="max-w-lg mx-auto">
            <p className="text-center">adaxxxith@gmail.com</p>
            <p className="text-center pt-2">Axxm Sxxth</p>
            <div className="flex mt-3">
              <InputOtp />
              <InputOtp />
              <InputOtp />
              <InputOtp />
            </div>
            <p className="text-center text-colorParagraph mt-5 text-sm">
              Kode akan kadaluarsa dalam 01:59
            </p>
            <div className="mt-3">
              <div className="mx-auto text-center">
                <span className="text-sm font-medium">
                  Belum menerima kode?{" "}
                </span>
                <Link
                  to="/register"
                  className="text-sm font-medium text-primaryColor underline"
                >
                  Kirim ulang kode
                </Link>
              </div>
              <button className="bg-primaryColor hover:bg-[#f05d27] text-white py-2 px-4 rounded-full w-full mt-5 text-base font-medium">
                Verify
              </button>
            </div>
          </form>
        </Cards>
      </div>
    </div>
  );
};

export default VerifyForgotPassword;
