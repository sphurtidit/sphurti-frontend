import React, { useState } from "react";
import signpage from './Signup.module.css';
import { useNavigate } from "react-router-dom";

function Signinpage() {
    const [isOtpVisible, setOtpVisible] = useState(false); // State to toggle OTP visibility
    const navigate = useNavigate();

    // Functions to handle OTP popup
    const openpopup = () => setOtpVisible(true);
    const closepopup = () => setOtpVisible(false);

    return (
        <>
            <div className={signpage.Container}>
                <div className={signpage.Box}>
                    <h1>
                        <p>Welcome to</p>
                        Sphurti
                    </h1>
                    <form>
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
                            <div
                                className={signpage.forpass}
                                onClick={openpopup} // Pass function reference here
                            >
                                <a>Verify </a>
                            </div>

                            {/* OTP Popup */}
                            <div
                                className={`${signpage.otp} ${
                                    isOtpVisible ? signpage.openpopup : ""
                                }`}
                                id="otp"
                            >
                                <h1>Enter the OTP</h1>
                                <input
                                    type="password"
                                    placeholder="Enter the OTP"
                                    required
                                />
                                <button
                                    type="button"
                                    className={signpage.signinBtn}
                                    onClick={closepopup}
                                >
                                    OK
                                </button>
                                <button
                                    type="button"
                                    className={signpage.signinBtn}
                                >
                                    Resend OTP
                                </button>
                            </div>
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
                        <div className={signpage.branch}>
                            <div className={signpage.formGroup}>
                                <input
                                    type="text"
                                    name="branch"
                                    placeholder="Branch"
                                    required
                                />
                            </div>
                            <div className={signpage.formGroup}>
                                <input
                                    type="number"
                                    name="number"
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
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signinpage;
