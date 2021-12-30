import bg from "../assets/background.png";
import Cards from "../components/Cards";
import InputForm from "../components/InputForm";
import Logo from "../components/Logo";
import PasswordForm from "../components/PasswordForm";
import Checkbox from "../components/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../components/Modal";

const Register = () => {
  const [helper, setHelper] = useState(null);
  const [show, setShow] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  });
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    navigate("/login");
  }

  function openModal() {
    setIsOpen(true);
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (passwordConfirmation !== null && input.password !== "") {
      if (passwordConfirmation !== input.password) {
        setHelper("Password tidak cocok");
      } else {
        setHelper("Password cocok");
        setErrors({ ...errors, passwordConfirmation: null, password: null });
      }
    }
    //eslint-disable-next-line
  }, [input, passwordConfirmation]);

  const handleInput = (e) => {
    let value = e.currentTarget.value;
    let name = e.currentTarget.name;
    if (name !== "password_confirmation") {
      setInput({ ...input, [name]: value });
    } else {
      setPasswordConfirmation(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordConfirmation !== null && input.password !== "") {
      if (passwordConfirmation !== input.password) {
        return setErrors({
          ...errors,
          passwordConfirmation: "Kata sandi tidak cocok",
          password: "Kata sandi tidak cocok",
        });
      } else {
        try {
          const response = await axios.post(
            "https://tmi-indo.herokuapp.com/user/register",
            input
          );
          console.log(response);
          openModal();
        } catch (err) {
          console.log(err.message);
        }
      }
    }
    // console.log(input);
  };
  // console.log(errors);

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
          title="Ayo Daftar Sekarang!"
          desc="Daftarkan dirimu dan bergabung menjadi bagian dari kami para tokoh pemuda indonesia"
        >
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <InputForm
              title="Username"
              desc="Masukan username kamu"
              name="username"
              type="text"
              onChange={handleInput}
              value={input.username}
            />
            <InputForm
              title="Email"
              desc="Masukan nomer hp/email"
              name="email"
              type="email"
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
              isError={errors.password !== null}
            />
            <PasswordForm
              title="Confirm Password"
              desc="Konfirmasi kata sandi"
              name="password_confirmation"
              min="8"
              onChange={handleInput}
              show={show}
              onClick={() => setShow(!show)}
              value={passwordConfirmation}
              isError={errors.passwordConfirmation !== null}
            />
            <span
              className={`${
                helper === "Password cocok" ? "text-green-600" : "text-red-600"
              } text-sm font-medium`}
            >
              {helper}
            </span>
            <div className="flex mt-5 lg:mt-3 items-center">
              <Checkbox />
              <p className="2xl:text-sm lg:text-xs font-medium mr-1" href="/">
                I Accept
              </p>
              <a
                href="/"
                className="2xl:text-sm lg:text-xs font-medium text-primaryColor underline mr-1"
              >
                Term & Conditions
              </a>
              <p className="2xl:text-sm lg:text-xs font-medium mr-1" href="/">
                and
              </p>
              <a
                href="/"
                className="2xl:text-sm lg:text-xs font-medium text-primaryColor underline"
              >
                Privacy Policies.
              </a>
            </div>
            <div className="2xl:mt-8 lg:mt-4">
              <button
                className="bg-primaryColor hover:bg-[#f05d27] text-white py-2 px-4 rounded-full w-full 2xl:text-base lg:text-sm font-medium"
                type="submit"
              >
                Register
              </button>
              <div className="mt-8 lg:mt-4 mx-auto text-center">
                <Link className="2xl:text-sm lg:text-xs font-medium" to="/">
                  Kamu sudah punya akun?
                </Link>{" "}
                <Link
                  to="/Login"
                  className="2xl:text-sm lg:text-xs font-medium text-primaryColor underline"
                >
                  Login disini
                </Link>
              </div>
            </div>
          </form>
        </Cards>
      </div>
      <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
    </div>
  );
};

export default Register;
