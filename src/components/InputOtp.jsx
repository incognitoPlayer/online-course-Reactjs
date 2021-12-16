import { useState } from "react";
import OtpInput from 'react-otp-input';

const InputOtp = () => {
  const [otp, setotp] = useState('')
  return (
    <>
      <OtpInput
      value={otp}
      onChange={setotp}
      shouldAutoFocus={true}
      inputStyle={{
        border: "1px solid #d8d8d8",
        borderRadius: "8px",
        width: "80px",
        height: "80px",
        fontSize: "40px",
        fontWeight: "400",
        caretColor: "#FB6C37",
        backgroundColor: "#FAFAFA",
        margin: "15px"
      }} 
      focusStyle={{
        border: "1px solid #FB6C37",
        boxShadow: "none"
      }}
      disabled={false}
      required
      isInputNum
    />
    </>
  );
};
export default InputOtp;