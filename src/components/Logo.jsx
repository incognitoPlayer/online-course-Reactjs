import logo from "../assets/logos.svg";
import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate()
    return (
        <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Logo
