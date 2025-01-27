import React, { useState } from "react";
import signpage from "./Signup.module.css"; // CSS Module import
import { useNavigate } from "react-router-dom";
import Sphurti from "../../assets/sphurti.png"; // Left Logo
import Naac from "../../assets/naac.png"; // Middle Logo
import Dit from "../../assets/DIT.png"; // Right Logo
import BGImage from "../../assets/loginbg.jpg"; // Background Image

function Signinpage() {
    const [isOtpVisible, setOtpVisible] = useState(false);
    const navigate = useNavigate();

    // Functions to handle OTP popup
    const openpopup = () => setOtpVisible(true);
    const closepopup = () => setOtpVisible(false);

    return (
        <div className={signpage.pageWrapper}>
            {/* Background image */}
            <div
                className={signpage.bgimage}
                style={{ backgroundImage: `url(${BGImage})` }}
            ></div>
            

            {/* Signup Form */}
            <div
                className={`${signpage.Container} ${isOtpVisible ? signpage.blur : ""}`}
            >
                <div className={signpage.Box}>
                    {/* Logos with proper spacing */}
                    <div className={signpage.logos}>
                        <img src={Sphurti} alt="Sphurti Logo" className={signpage.logoLeft} />
                        <img src={Naac} alt="Naac Logo" className={signpage.logoMiddle} />
                        <img src={Dit} alt="Dit Logo" className={signpage.logoRight} />
                    </div>
                    <h1 className={signpage.heading}>Welcome to Sphurti</h1>
                    <form className={signpage.form}>
                        <div className={signpage.formGroup}>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className={signpage.formGroup}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your E-mail"
                                required
                            />
                            <div className={signpage.forpass} onClick={openpopup}>
                                <a>Verify</a>
                            </div>

                            {/* OTP Popup */}
                           
                        </div>

                        <div className={signpage.formGroup}>
                            <input
                                type="text"
                                name="Cname"
                                placeholder="Enter your College"
                                required
                            />
                        </div>
                        <div className={signpage.formGroup}>
                            <input
                                type="text"
                                name="id"
                                placeholder="Enter your college ID"
                                required
                            />
                        </div>
                        <div className={signpage.branchRow}>
                            <div className={signpage.formGroup}>
                                <input
                                    className={signpage.diff}
                                    type="text"
                                    name="branch"
                                    placeholder="Branch"
                                    required
                                />
                            </div>
                            <div className={signpage.formGroup}>
                                <input
                                    className={signpage.diff}
                                    type="number"
                                    name="year"
                                    placeholder="Year"
                                    required
                                />
                            </div>
                        </div>
                        <div className={signpage.formGroup}>
                            <input
                                type="password"
                                name="password"
                                placeholder="Set your password"
                                required
                            />
                        </div>

                        <button type="submit" className={signpage.signinBtn}>
                            Sign In
                        </button>
                    </form>
                </div>
            </div>

            {/* OTP Popup */}
            <div
                className={`${signpage.otp} ${
                    isOtpVisible ? signpage.openpopup : ""
                }`}
                id="otp"
            >
                <h1>Enter the OTP</h1>
                <input type="password" placeholder="Enter the OTP" required />
                <div className={signpage.otpActions}>
                    <button
                        type="button"
                        className={signpage.signinBtn}
                        onClick={closepopup}
                    >
                        OK
                    </button>
                    <button type="button" className={signpage.resendBtn}>
                        Resend OTP
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signinpage;
