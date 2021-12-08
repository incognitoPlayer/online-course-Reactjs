import bg from "../assets/background.png";
import Cards from "../components/Cards";
import Logo from "../components/Logo";
import PasswordForm from "../components/PasswordForm";
import { useState, useEffect } from "react"

const ResetPassword = () => {
    const [show, setShow] = useState(false)
    const [helper, setHelper] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [input, setInput] = useState({ password: '' })
    const [errors, setErrors] = useState({ password: null, passwordConfirmation: null })
    useEffect(() => {
        if (passwordConfirmation !== null && input.password !== "") {
            if (passwordConfirmation !== input.password) {
                setHelper("Password tidak cocok")
            } else {
                setHelper("Password cocok")
                setErrors({ ...errors, passwordConfirmation: null, password: null })
            }
        }
        //eslint-disable-next-line
    }, [input, passwordConfirmation])
    const handleInput = (e) => {
        let value = e.currentTarget.value
        let name = e.currentTarget.name
        if (name !== "password_confirmation") {
            setInput({ ...input, [name]: value })
        } else {
            setPasswordConfirmation(value)
        }
    }
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
                    title="Reset Password"
                    desc="Kamu sekarang bisa membuat kata sandi baru untuk login ke halaman dashboard"
                >
                    <form className="max-w-lg mx-auto">
                        <PasswordForm title="Password" desc="Masukan kata sandi" name="password" min="8" show={show} onChange={handleInput} onClick={() => setShow(!show)} value={input.password} isError={errors.password !== null} />
                        <PasswordForm title="Confirm Password" desc="Konfirmasi kata sandi" name="password_confirmation" min="8" onChange={handleInput} show={show} onClick={() => setShow(!show)} value={passwordConfirmation} isError={errors.passwordConfirmation !== null } />
                        <span className={`${helper === "Password cocok" ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>{helper}</span>
                        <div className="mt-4 ">
                            <button className="bg-primaryColor hover:bg-[#f05d27] text-white py-2 px-4 rounded-full w-full text-base font-medium">
                                Create New Password
                            </button>
                        </div>
                    </form>
                </Cards>
            </div>
        </div>
    )
}

export default ResetPassword
