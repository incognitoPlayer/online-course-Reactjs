import bg from "../assets/background.png";
import Cards from "../components/Cards";
import InputForm from "../components/InputForm";
import Logo from "../components/Logo";
import PasswordForm from "../components/PasswordForm";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";
import { useState } from "react"

const Register = () => {
    const [show, setShow] = useState(false)
    return (
        <div
            className="bg-no-repeat bg-center h-screen"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "100vw 100vh", overflowY: 'scroll' }}>
            <div className="container mx-auto mb-6">
                <div className="flex justify-center pt-10">
                    <Logo />
                </div>
                <Cards title="Ayo Daftar Sekarang!" desc="Daftarkan dirimu dan bergabung menjadi bagian dari kami para tokoh pemuda indonesia">
                    <form className="max-w-lg mx-auto">
                        <InputForm title="Username" desc="Masukan username kamu" />
                        <InputForm title="Phone Number HP/Email" desc="Masukan nomer hp/email" />
                        <PasswordForm title="Password" desc="Masukan kata sandi" show={show} onClick={() => setShow(!show)} />
                        <PasswordForm title="Confirm Password" desc="Konfirmasi kata sandi" show={show} onClick={() => setShow(!show)} />
                        <div className="flex">
                            <Checkbox />
                            <p className="text-sm font-medium mr-1" href="/">I Accept</p>
                            <a href="/" className="text-sm font-medium text-primaryColor underline mr-1">Term & Conditions</a>
                            <p className="text-sm font-medium mr-1" href="/">and</p>
                            <a href="/" className="text-sm font-medium text-primaryColor underline">Privacy Policies.</a>
                        </div>
                        <div className="mt-8 ">
                            <button className="bg-primaryColor hover:bg-[#f05d27] text-white py-2 px-4 rounded-full w-full text-base font-medium">Register</button>
                            <div className="mt-8 mx-auto text-center">
                                <Link className="text-sm font-medium" to="/">Kamu sudah punya akun?</Link> <Link to="/Login" className="text-sm font-medium text-primaryColor underline">Login disini</Link>
                            </div>
                        </div>
                    </form>
                </Cards>
            </div>
        </div>
    )
}

export default Register
