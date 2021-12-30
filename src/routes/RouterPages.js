import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyForgotPassword from "../pages/VerifyForgotPassword";
import VerifyRegister from "../pages/VerifyRegister";
import ResetPassword from "../pages/ResetPassword";
import Practice from "../pages/Practice";

const RouterPages = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/verifyforgotpassword"
            element={<VerifyForgotPassword />}
          />
          <Route path="/verifyregister" element={<VerifyRegister />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterPages;
