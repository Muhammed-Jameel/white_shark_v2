import React, {useState} from 'react'
import OTPInput, { ResendOTP } from "otp-input-react";
import './PagesStyles.css';

const OtpVerfication = () => {

    const [OTP, setOTP] = useState("");
  return (
  <>
      <OTPInput
      value={OTP}
      onChange={setOTP}
      autoFocus
      OTPLength={6}
      otpType="number"
      disabled={false}
      secure
    />
    <ResendOTP handelResendClick={() => console.log("Resend clicked")} />
  </>
    
  )
}

export default OtpVerfication





