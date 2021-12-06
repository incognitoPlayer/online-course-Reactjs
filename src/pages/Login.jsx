import bg from "../assets/background.png";
import Cards from "../components/Cards";
import InputForm from "../components/InputForm";
import Logo from "../components/Logo";
import PasswordForm from "../components/PasswordForm";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";

const Login = () => {
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
        <Cards
          title="welcome Back!"
          desc="Masukan number handphone/email dan passwordmu untuk masuk ke halaman dashboard"
        >
          <form className="max-w-lg mx-auto">
            <InputForm
              title="Phone Number HP/Email"
              desc="Masukan no hp atau email"
              type="email"
            />
            <PasswordForm title="Password" desc="Masukan kata sandi" />
            <div className="flex justify-between items-center">
              <Checkbox title="Remember me" />
              <Link
                to="/forgotpassword"
                className="text-sm font-medium text-primaryColor underline"
              >
                Forgot Password ?
              </Link>
            </div>
            <div className="mt-8 ">
              <button className="bg-primaryColor hover:bg-[#f05d27] text-white py-2 px-4 rounded-full w-full text-base font-medium">
                Login
              </button>
              <div className="mt-8 mx-auto text-center">
                <Link className="text-sm font-medium" to="/register">
                  Kamu belum punya akun?
                </Link>{" "}
                <Link
                  to="/register"
                  className="text-sm font-medium text-primaryColor underline"
                >
                  Sign up disini
                </Link>
              </div>
            </div>
          </form>
        </Cards>
      </div>
    </div>
  );
};

export default Login;
