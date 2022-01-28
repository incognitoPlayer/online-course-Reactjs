import bg from "../assets/background.png";
import Cards from "../components/Cards";
import InputForm from "../components/InputForm";
import Logo from "../components/Logo";
import PasswordForm from "../components/PasswordForm";
import Checkbox from "../components/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setInput({ ...input, [name]: value }); //spread operator
    // console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://tmi-indo.herokuapp.com/user/login",
        input
      );
      console.log(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100vw 100vh",
        overflowY: "scroll",
      }}
    >
      <div className="container mx-auto 2xl:mb-6 lg:mb-3">
        <div className="flex justify-center pt-10">
          <Logo />
        </div>
        <Cards
          title="Welcome Back!"
          desc="Masukan number handphone/email dan passwordmu untuk masuk ke halaman dashboard"
        >
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <InputForm
              title="Email"
              desc="Masukan no hp atau email"
              type="email"
              name="email"
              onChange={handleInput}
              value={input.email}
            />
            <PasswordForm
              title="Password"
              desc="Masukan kata sandi"
              name="password"
              min="8"
              show={show}
              onChange={handleInput}
              onClick={() => setShow(!show)}
              value={input.password}
            />
            <div className="flex justify-between items-center">
              <Checkbox
                title="Remember me"
                titleStyle="2xl:text-[14px] lg:text-xs font-medium"
              />
              <Link
                to="/forgotpassword"
                className="2xl:text-sm lg:text-xs font-medium text-primaryColor underline"
              >
                Forgot Password ?
              </Link>
            </div>
            <div className="mt-8 lg:mt-4">
              <button
                type="submit"
                className="bg-primaryColor hover:bg-[#f05d27] text-white py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium"
              >
                Login
              </button>
              <div className="2xl:mt-8 lg:mt-4 mx-auto text-center">
                <Link
                  className="2xl:text-sm lg:text-xs font-medium"
                  to="/register"
                >
                  Kamu belum punya akun?
                </Link>{" "}
                <Link
                  to="/register"
                  className="2xl:text-sm lg:text-xs font-medium text-primaryColor underline"
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
