import React, { useState } from "react";
import logpage from "./Loginpage.module.css";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
import Navbar from "../Navbar/nav";
import axios from "axios";
import { handleSuccess, handleError } from "../../utils";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import loginback from"../../assets/loginback.png";
import loginbackground from"../../assets/loginbackground.png";


function Loginpage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUserStore();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    if(await loginUser(email, password)) {
      navigate("/");
    } 
  };

  return (
    <>
    <Navbar/>
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
          <h1 className={logpage.title}>
          Welcome to Sphurti
          </h1>
          <form onSubmit={handleLogin}>
            <div className={logpage.email}>
              <label htmlFor="email">Email</label>
              <input className={logpage.kash}
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
              <input  className={logpage.kash}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <a href="#">
              <p className={logpage.forpass}>Forgot Password</p>
            </a>
            <p className={logpage.signupText}>
              Don't have an account?{" "}
              <span className={logpage.signup} onClick={() => navigate("/Signinpage")}>Sign Up</span>
            </p>
            <button type="submit" className={logpage.loginBtn}>
              Login
            </button>
          </form>

            {/* <h1 ><p >Welcome to </p>
                      Sphurti</h1>
            <form>
                <div className={logpage.formGroup}>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                </div>
                <div className={logpage.formGroup}>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                </div>
                <a href="#"><p className={logpage.forpass}>Forgot Password</p></a>
                <button type="submit" className={logpage.loginBtn}>Login</button>
                <p className={logpage.signupText}><b>Don't have an account? </b><a href="#">Sign Up</a></p>
                
            </form> */}
        </div>
      </div>
      </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Loginpage;