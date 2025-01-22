import React, { useState } from "react";
import signpage from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Signinpage() {
  const [isOtpVisible, setOtpVisible] = useState(false); // State to toggle OTP visibility
  const navigate = useNavigate();

  // Functions to handle OTP popup
  const openpopup = () => setOtpVisible(true);
  const closepopup = () => setOtpVisible(false);

  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };
  console.log("Signup Info -> ", signupInfo);
  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`${signpage.Container} ${isOtpVisible ? signpage.blur : ""}`}
      >
        <div className={signpage.Box}>
          <h1>
            <p>Welcome to</p>
            Sphurti
          </h1>
          <form onSubmit={handleSignup}>
            <div className={signpage.formGroup}>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                value={signupInfo.name}
              />
            </div>
            <div className={signpage.formGroup}>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your E-mail"
                required
                value={signupInfo.email}
              />
              <div
                className={signpage.forpass}
                onClick={openpopup} // Pass function reference here
              >
                <a>Verify </a>
              </div>

              {/* OTP Popup */}
            </div>

            <div className={signpage.formGroup}>
              <input
                onChange={handleChange}
                type="text"
                name="Cname"
                placeholder="Enter your College"
                required
                value={signupInfo.collegeName}
              />
            </div>
            <div className={signpage.formGroup}>
              <input
                onChange={handleChange}
                type="text"
                name="id"
                placeholder="Enter your college ID"
                required
                value={signupInfo.collegeId}
              />
            </div>
            <div className={signpage.branch}>
              <div className={signpage.formGroup}>
                <input
                  onChange={handleChange}
                  className={signpage.diff}
                  type="text"
                  name="branch"
                  placeholder="Branch"
                  required
                  value={signupInfo.branch}
                />
              </div>
              <div className={signpage.formGroup}>
                <input
                  onChange={handleChange}
                  className={signpage.diff}
                  type="number"
                  name="number"
                  placeholder="Year"
                  required
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
                required
                value={signupInfo.password}
              />
            </div>

            <button type="submit" className={signpage.signinBtn}>
              Sign in
            </button>
            {/* <span>Already have an Account
                <Link to="/loginpage">Login</Link>
            </span> */}
          </form>
          <ToastContainer />
        </div>
      </div>
      <div
        className={`${signpage.otp} ${isOtpVisible ? signpage.openpopup : ""}`}
        id="otp"
      >
        <h1>Enter the OTP</h1>
        <input type="password" placeholder="Enter the OTP" required />
        <button
          type="button"
          className={signpage.signinBtn}
          onClick={closepopup}
        >
          OK
        </button>
        <button type="button" className={signpage.signinBtn}>
          Resend OTP
        </button>
      </div>
    </>
  );
}

export default Signinpage;
