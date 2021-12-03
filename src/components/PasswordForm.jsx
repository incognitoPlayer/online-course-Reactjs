import iconEyeOpen from "../assets/eye-open.svg";
import iconEyeClose from "../assets/eye-close.svg";
import { useState } from "react"

const PasswordForm = (props) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <label className="block text-colorHeading text-sm font-medium mb-2" htmlFor="password">
                {props.title}
            </label>
            <div className="relative">
                <input className="bg-[#FAFAFA] border rounded-lg text-[15px] font-regular w-full h-[48px] py-2 px-3 text-colorHeading leading-tight focus:outline-none focus:shadow-outline focus:border-primaryColor border-[#e4e4e4] focus:ring-0 mb-4 " id="password" type={show ? "" : "password"} placeholder={props.desc} />
                <img className="absolute top-[13px] right-[20px]" src={show ? iconEyeOpen : iconEyeClose} onClick={() => setShow(!show)} alt="" />
            </div>
        </>
    )
}

export default PasswordForm
