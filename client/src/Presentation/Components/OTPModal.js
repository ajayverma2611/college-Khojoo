import { useState } from "react";
import "../Styles/OTPModal.css"; 
import { MdCancel } from "react-icons/md";
import Loading from "../Pages/Loading";
import axios from "axios";

const OTPModalSignUp = ({ email, setIsModalOpen, navigate, setError, showModal }) => {
  const [otp, setOtp] = useState(["", "", "", "","",""]);
  const [isloading, setIsloading] = useState(false);

  
  const handleOtpChange = (e, index) => {
    let newOtp = [...otp];
  
    // If the key pressed is backspace and the current input is empty, move to the previous box
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        // Move focus to the previous input box and delete its value
        document.getElementById(`otp-${index - 1}`).focus();
        newOtp[index - 1] = "";
      }
    } else {
      // Handle regular input (including non-backspace)
      newOtp[index] = e.target.value.slice(0, 1); // Allow only one digit per box
    }
  
    setOtp(newOtp);
  
    // Automatically move to the next field if input is filled
    if (newOtp[index] !== "" && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle OTP submission
    const handleOTPSubmit = async (event) => {
    event.preventDefault();
    const otpString = otp.join(""); // Convert OTP array to string
    setIsloading(true); // Show loading indicator while waiting for the response

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/verifyotp",
        { email, otp: otpString },
        { withCredentials: true }
      );

      if (response.data.message === "OTP verified successfully. Account created.") {
        setIsModalOpen(false);
        setTimeout(() => navigate("/home"), 1500); // Navigate to sign-in after OTP verification
      } else {
        setError("Invalid OTP");
      }
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed");
    }
    setIsloading(false); // Hide loading indicator
  };

  return (
    <div className="OTPModalMain">
      {isloading && <Loading />} {/* Show loading indicator if OTP submission is in progress */}
      <div className="OTPModal">
        <div className="cancelIcon" onClick={() => showModal(false)}>
          <MdCancel className="cancelIcon" color="#05B97D" size="1.5rem" />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label className="EnterOtpLabel">Enter OTP received: </label>
          <div style={{justifyContent:"center", display:"flex"}}>
          <p style={{color:"#B6B6B6"}}>A OTP has been sent to your email !</p>
          </div>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                type="text"
                id={`otp-${index}`}
                key={index}
                className="otp-input"
                value={digit}
                maxLength="1"
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleOtpChange(e, index)} // Listen for backspace key press
              />
            ))}
          </div>
        </div>
      </div>

      <div className="OTPSubmitSection">
        <form onSubmit={handleOTPSubmit}>
          <div className="btncontainer">
            <button type="submit" className="OTPSubmitBtn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPModalSignUp;
