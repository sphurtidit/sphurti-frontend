import React, { useState } from "react";
import signpage from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../../store/userStore";
import useInfoStore from "../../store/infoStore";
import loginback from "../../assets/loginback.png";
import loginbackground from "../../assets/loginbackground.png";
import Navbar from "../Navbar/nav";
import { FaSpinner } from "react-icons/fa";

function Signinpage() {
  const [isOtpVisible, setOtpVisible] = useState(false); // State to toggle OTP visibility
  const [otp, setOtp] = useState(""); // State to store OTP
  const navigate = useNavigate();
  const { signupUser, verifyEmail, verifyOtp } = useUserStore();
  const { setInfo } = useInfoStore();
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const openpopup = () => setOtpVisible(true);
  const closepopup = () => setOtpVisible(false);

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    phone_no: "",
    password: "",
    clg_name: "",
    clg_id: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if(loading) return;
    setLoading(true);
    if (!otpVerified) {
      setInfo("Please verify your email", "error");
      setLoading(false);
      return;
    }

    if (await signupUser(signupInfo)) {
      navigate("/");
    }
    setLoading(false);
  };

  const handleVerifyEmail = async () => {
    const { email } = signupInfo;
    if (await verifyEmail(email)) {
      openpopup();
    }
  };

  const handleVerifyOtp = async () => {
    const { email } = signupInfo;
    if (await verifyOtp(email, otp)) {
      closepopup();
      setOtpVerified(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className={signpage.pageWrapper}>
        <div className={signpage.overlay1} style={{ backgroundImage: `url(${loginback})` }}>
          <div className={signpage.overlay2} style={{ backgroundImage: `url(${loginbackground})` }}></div>
          <div className={`${signpage.Container1} ${isOtpVisible ? signpage.blur : ""}`}>
            <div className={signpage.Box}>
              <h1>
                <p>Create a new Account</p>
              </h1>
              <form onSubmit={handleSignup}>
                <div className={signpage.formGroup}>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Create a username"
                    value={signupInfo.name}
                  />
                </div>

            <div className={signpage.formGroup}>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your E-mail"
                value={signupInfo.email}
              />
              <div className={signpage.forpass} onClick={handleVerifyEmail}>
                <a>{otpVerified ? "Email Verified" : "Verify Email"}</a>
              </div>
            </div>
            <div className={signpage.formGroup}>
              <input
                onChange={handleChange}
                type="number"
                name="phone_no"
                placeholder="Enter your phone number"
                value={signupInfo.phone_no}
              />
            </div>

                <div className={signpage.formGroup}>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="clg_name"
                    placeholder="Enter your College"
                    value={signupInfo.clg_name}
                  />
                </div>
                <div className={signpage.formGroup}>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="clg_id"
                    placeholder="Enter your college ID"
                    value={signupInfo.clg_id}
                  />
                </div>
                <div className={signpage.formGroupRow}>
                  <div className={signpage.formGroup}>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="branch"
                      placeholder="Branch"
                      value={signupInfo.branch}
                    />
                 
                  </div>
                  <div className={signpage.formGroup}>
                    <input
                      onChange={handleChange}
                      type="number"
                      name="year"
                      placeholder="Year"
                      value={signupInfo.year}
                    />
                  </div>
                </div>
                <div className={signpage.formGroup}>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Set your password"
                    value={signupInfo.password}
                  />
                </div>

                <button type="submit" className={signpage.signinBtn} disabled={loading}>
                  {loading? <FaSpinner/> : "Sign up"}
                </button>
              </form>
            </div>
          </div>

          {isOtpVisible && (
            <div className={`${signpage.otp} ${signpage.openpopup}`} id="otp">
              <h1>Enter the OTP</h1>
              <input
                type="text"
                placeholder="Enter the OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button
                type="button"
                className={signpage.signinBtn}
                onClick={handleVerifyOtp}
              >
                OK
              </button>
              <button
                type="button"
                className={signpage.signinBtn}
                onClick={handleVerifyEmail}
              >
                Resend OTP
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signinpage;