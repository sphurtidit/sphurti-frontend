import React, { useState } from "react";
import logpage from "./Loginpage.module.css";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginback from "../../assets/loginback.png";
import loginbackground from "../../assets/loginbackground.png";
import Footer from "../Footer/Footer";
import Navbar from '../Navbar/Navbar';


function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUserStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (await loginUser(email, password)) {
      navigate("/");
    }
  };

  return (
    <div className={logpage.pageContainer}>  
      <Navbar />
      <div 
        className={logpage.overlay1} 
        style={{ backgroundImage: `url(${loginback})` }}
      >
        <div 
          className={logpage.overlay2} 
          style={{ backgroundImage: `url(${loginbackground})` }}
        >
          <div className={logpage.loginContainer}>
            <div className={logpage.loginBox}>
              <h1 className={logpage.title}>Welcome to Sphurti</h1>
              <form onSubmit={handleLogin}>
                <div className={logpage.email}>
                  <label htmlFor="email">Email</label>
                  <input
                    className={logpage.kash}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={logpage.email}>
                  <label htmlFor="password">Password</label>
                  <input
                    className={logpage.kash}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <p className={logpage.signupText}>
                  Don't have an account?{" "}
                  <span 
                    className={logpage.signup} 
                    onClick={() => navigate("/Signinpage")}
                  >
                    Sign Up
                  </span>
                </p>
                <button type="submit" className={logpage.loginBtn}>
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* Footer fixed at the bottom */}
          <div className={logpage.footer}>
          
          </div>
          {/* <Footer /> */}
        </div>
    
      </div>
    
      <ToastContainer />
    </div>
  );
}

export default Loginpage;
