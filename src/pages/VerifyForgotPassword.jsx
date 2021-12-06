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
            <p className="text-center">08123456xxxxx</p>
            <p className="text-center pt-2">Axxm Sxxth</p>
            <div className="flex">
              <InputOtp />
              <InputOtp />
              <InputOtp />
              <InputOtp />
            </div>
          </form>
        </Cards>
      </div>
    </div>
  );
};

export default VerifyForgotPassword;
