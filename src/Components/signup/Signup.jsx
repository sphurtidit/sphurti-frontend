import React, { useState } from "react";
import signpage from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginback from "../../assets/loginback.png";
import loginbackground from "../../assets/loginbackground.png";
import Navbar from "../Navbar/nav";

function Signinpage() {
  const [isOtpVisible, setOtpVisible] = useState(false); // State to toggle OTP visibility
  const [otp, setOtp] = useState(""); // State to store OTP
  const navigate = useNavigate();

  // Functions to handle OTP popup
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
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      toast.error("Name, Email, and Password are required");
      return;
    }
    try {
      const url = "https://sphurti-backend.onrender.com/api/user/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Signup successful!");
        localStorage.setItem("authToken", result.data.token);
        navigate("/");
      } else {
        toast.error(result.message || "Signup failed");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleVerifyEmail = async () => {
    const { email } = signupInfo;
    if (!email) {
      toast.error("Please enter your email to verify.");
      return;
    }

    try {
      const url = "https://sphurti-backend.onrender.com/api/user/verify-email";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("OTP sent to your email.");
        openpopup();
      } else {
        toast.error(result.message || "Failed to send OTP");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const handleVerifyOtp = async () => {
    const { email } = signupInfo;
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }
    try {
      const url = "https://sphurti-backend.onrender.com/api/user/verify-otp";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("OTP verified successfully!");
        closepopup();
      } else {
        toast.error(result.message || "Invalid OTP");
      }
    } catch (err) {
      toast.error(err.message);
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
                <p>Enter Your Details</p>
              </h1>
              <form onSubmit={handleSignup}>
                <div className={signpage.formGroup}>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Enter your username"
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
                    <a>Verify</a>
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

                <button type="submit" className={signpage.signinBtn}>
                  Sign in
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