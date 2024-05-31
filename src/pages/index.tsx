import { useState } from "react";
import styled from "../styles/Home.module.css";

export default function HomePage() {
  const [verifyOTP, setVerifyOTP] = useState(false);

  function handleVerifyOTPClick() {
    setVerifyOTP(!verifyOTP);
  }
  return (
    <>
      {verifyOTP == false ? (
        <div className={styled.main_container}>
          <form className={styled.form_container} action="">
            <div className={styled.input_content}>
              <label htmlFor="phone_number">Phone</label>
              <input
                className={styled.input_class}
                type="text"
                name="phone_number"
                id="phoneNumber"
              />
            </div>
            <button onClick={() => {handleVerifyOTPClick()}} className={styled.submit_button} type="submit">
              Send OTP
            </button>
          </form>
        </div>
      ) : (
        <div className={styled.main_container}>
          <form className={styled.form_container} action="">
            <div className={styled.input_content}>
              <label htmlFor="opt_number">Enter OTP</label>
              <input
                className={styled.input_class}
                type="text"
                name="otp_number"
                id="otpNumber"
              />
            </div>
            <button className={styled.submit_button} type="submit">
              Verify OTP
            </button>
          </form>
        </div>
      )}
    </>
  );
}
